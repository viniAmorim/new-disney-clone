import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import { Layout } from '~/app/components';

import CreateOrderContainer from '../createOrder/CreateOrderContainer';
import EmptyState from './EmptyState';
import * as Styled from './styles';

interface Card {
  id: number;
  title: string;
  description: string;
}
interface DashboardProps {
  contactOrders: Card[];
  proposalOrders: Card[];
  waitingOrders: Card[];
  doneOrders: Card[];
  onRefresh: () => void;
  onOrderChange: (fromLane: string, toLane: string, id: number) => void;
  onCardDelete: (id: number, lane: string) => void;
  onCardClick: (id: number) => void;
}

function Dashboard({
  contactOrders = [],
  proposalOrders = [],
  waitingOrders = [],
  doneOrders = [],
  onRefresh,
  onCardDelete,
  onOrderChange,
  onCardClick,
}: DashboardProps) {
  return (
    <Layout>
      {contactOrders.length >= 1 ||
      proposalOrders.length >= 1 ||
      waitingOrders.length >= 1 ||
      doneOrders.length >= 1 ? (
        <Container>
          <Row justify="end">
            <Styled.ButtonContainer sm={12} md={12}>
              <CreateOrderContainer onRefresh={onRefresh} />
            </Styled.ButtonContainer>
          </Row>
          <Row>
            <Col sm={12} md={12}>
              <Styled.StyledBoard
                onCardMoveAcrossLanes={onOrderChange}
                onCardDelete={onCardDelete}
                onCardClick={onCardClick}
                data={{
                  lanes: [
                    {
                      id: 'contact',
                      title: 'Entrar em contato',
                      label: contactOrders.length.toString().padStart(2, '0'),
                      cards: contactOrders,
                    },
                    {
                      id: 'proposal',
                      title: 'Criar Proposta',
                      label: proposalOrders.length.toString().padStart(2, '0'),
                      cards: proposalOrders,
                    },
                    {
                      id: 'waiting',
                      title: 'Aguardando Proposta',
                      label: waitingOrders.length.toString().padStart(2, '0'),
                      cards: waitingOrders,
                    },
                    {
                      id: 'done',
                      title: 'Finalizar Contrato',
                      label: doneOrders.length.toString().padStart(2, '0'),
                      cards: doneOrders,
                    },
                  ],
                }}
              />
            </Col>
          </Row>
        </Container>
      ) : (
        <EmptyState onRefresh={onRefresh} />
      )}
    </Layout>
  );
}

export default Dashboard;
