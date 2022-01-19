import React, { useState } from 'react';

import { useRouter } from 'next/router';

import { useAuth, useQuery } from '~/app/hooks';
import Order from '~/app/protocols/Order';
import { DELETE_ORDER } from '~/app/queries/deleteOrder';
import { GET_ORDERS } from '~/app/queries/getOrders';
import { UPDATE_ORDER } from '~/app/queries/updateOrder';

import Dashboard from './Dashboard';

function DashboardContainer() {
  useAuth();
  const router = useRouter();
  const [parsedOrders, setParsedOrders] = useState({
    contact: [],
    proposal: [],
    waiting: [],
    done: [],
  });

  const handleParserOrders = ({ getOrders }) => {
    setParsedOrders({
      contact: getCardsByType(getOrders, 'contact'),
      proposal: getCardsByType(getOrders, 'proposal'),
      waiting: getCardsByType(getOrders, 'waiting'),
      done: getCardsByType(getOrders, 'done'),
    });
  };

  const getOrdersQuery = useQuery<{
    getOrders: Order[];
  }>({ query: GET_ORDERS, immediate: true, onResult: handleParserOrders });

  const updateOrderMutation = useQuery({
    query: UPDATE_ORDER,
  });

  const deleteOrderMutation = useQuery({
    query: DELETE_ORDER,
  });

  const handleRefresh = () => {
    getOrdersQuery.execute();
  };

  const getCardsByType = (orders: Order[], type: string) => {
    return orders
      .filter((order) => order.status === type)
      .map((order) => ({
        id: order.id,
        title: order.customer.name,
        description: order.productCategory.name,
      }));
  };

  const handleOrderChange = (
    fromLane: string,
    toLane: string,
    cardId: number,
  ) => {
    const [card] = parsedOrders[fromLane].filter((item) => item.id === cardId);

    const removeFrom = parsedOrders[fromLane].filter(
      (item) => item.id !== cardId,
    );

    parsedOrders[toLane].push(card);

    setParsedOrders({
      ...parsedOrders,
      [fromLane]: removeFrom,
      [toLane]: parsedOrders[toLane],
    });

    updateOrderMutation.execute({
      id: cardId,
      status: toLane,
    });
  };

  const handleCardDelete = (cardId: number, lane: string) => {
    const removeFrom = parsedOrders[lane].filter((item) => item.id !== cardId);

    setParsedOrders({
      ...parsedOrders,
      [lane]: removeFrom,
    });

    deleteOrderMutation.execute({
      id: cardId,
    });
  };

  const handleCardClick = (id: number) => {
    router.push(`/order/${id}`);
  };

  return (
    <Dashboard
      contactOrders={parsedOrders.contact}
      proposalOrders={parsedOrders.proposal}
      waitingOrders={parsedOrders.waiting}
      doneOrders={parsedOrders.done}
      onRefresh={handleRefresh}
      onCardDelete={handleCardDelete}
      onOrderChange={handleOrderChange}
      onCardClick={handleCardClick}
    />
  );
}

export default DashboardContainer;
