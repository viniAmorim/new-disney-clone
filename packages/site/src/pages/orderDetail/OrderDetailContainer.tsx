import React, { useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';

import { useRouter } from 'next/router';

import { useQuery } from '~/app/hooks';
import Order from '~/app/protocols/Order';
import { ADD_ORDER_OBS } from '~/app/queries/addOrderObs';
import { GET_ORDER } from '~/app/queries/getOrder';

import OrderDetail from './OrderDetail';
import { ADD_ORDER_COMMUNICATION } from '~/app/queries/addOrderCommunication';

function OrderDetailContainer() {
  const { addToast } = useToasts();
  const router = useRouter();
  const getOrderQuery = useQuery<{
    getOrder: Order;
  }>({ query: GET_ORDER });

  const handleFail = (error: Error) => {
    console.log(error);
    addToast(
      'Ops! Tivemos um erro ao tentar executar. Tente novamente mais tarde.',
      {
        appearance: 'error',
        autoDismiss: true,
      },
    );
  };

  const handleOrderObsSuccess = () => {
    fetchOrder();
    addToast('Observação criada com sucesso.', {
      appearance: 'success',
      autoDismiss: true,
    });
  };

  const fetchOrder = () => {
    getOrderQuery.execute({
      id: parseInt(router.query.id.toString(), 10),
    });
  };

  const saveObsMutation = useQuery({
    query: ADD_ORDER_OBS,
    onResult: handleOrderObsSuccess,
    onFail: handleFail,
    useIsLoading: true,
  });

  const handleOrderCommunicationSuccess = () => {
    fetchOrder();
    addToast('SMS enviado para a fila com sucesso.', {
      appearance: 'success',
      autoDismiss: true,
    });
  };

  const saveSmsMutation = useQuery({
    query: ADD_ORDER_COMMUNICATION,
    onResult: handleOrderCommunicationSuccess,
    onFail: handleFail,
    useIsLoading: true,
  });

  useEffect(() => {
    if (router.query.id) {
      fetchOrder();
    }
  }, [router?.query?.id]);

  const handleSaveObs = (values: FieldValues) => {
    saveObsMutation.execute({
      orderId: router.query.id,
      observation: values.observation,
    });
  };

  const handleSaveSms = (values: FieldValues) => {
    saveSmsMutation.execute({
      orderId: router.query.id,
      message: values.message,
    });
  };

  return (
    <OrderDetail
      order={getOrderQuery.response.getOrder}
      onSaveObs={handleSaveObs}
      onSaveSms={handleSaveSms}
    />
  );
}

export default OrderDetailContainer;
