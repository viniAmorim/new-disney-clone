import React from 'react';
import { Container, Col } from 'react-grid-system';
import { FieldValues } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';

import { Button, Card, Tab } from '@site/uikit';

import { Layout } from '~/app/components';
import Order from '~/app/protocols/Order';

import FileForm from './FileForm';
import ObsForm from './ObsForm';
import SMSForm from './SMSForm';
import * as Styled from './styles';

interface OrderDetailProps {
  order: Order;
  onSaveObs: (values: FieldValues) => void;
  onSaveSms: (values: FieldValues) => void;
}

const OrderDetail = ({ order, onSaveObs, onSaveSms }: OrderDetailProps) => {
  if (!order) {
    return <Skeleton height={100} style={{ margin: '8px 0px' }} count={1} />;
  }

  let parsedStatus = '';
  switch (order.status) {
    default:
    case 'contact':
      parsedStatus = 'Entrar em contato';
      break;
    case 'proposal':
      parsedStatus = 'Criar Proposta';
      break;
    case 'waiting':
      parsedStatus = 'Aguardando Proposta';
      break;
    case 'done':
      parsedStatus = 'Finalizar Contrato';
      break;
  }

  return (
    <Layout>
      <Container>
        <Styled.StyledRow align="center" justify="between">
          <Col sm={6} md={6}>
            <Styled.StyledHeading size="headline">
              {order.customer.name}
            </Styled.StyledHeading>
          </Col>
          <Styled.RightCol sm={6} md={6}>
            <Button variant="ghost" size="small">
              Editar Perfil
            </Button>
          </Styled.RightCol>
        </Styled.StyledRow>
        <Styled.ContentRow>
          <Col sm={4} md={4} style={{ paddingLeft: 0 }}>
            <Card>
              <Styled.StyledHeading size="title">
                Dados pessoais
              </Styled.StyledHeading>
              <Styled.Paragraph>
                <Styled.Label>Nome:</Styled.Label> {order.customer.name}
              </Styled.Paragraph>
              <Styled.Paragraph>
                <Styled.Label>E-mail:</Styled.Label> {order.customer.email}
              </Styled.Paragraph>
              <Styled.Paragraph>
                <Styled.Label>Telefone:</Styled.Label>{' '}
                {order.customer.phones[0].phone}
              </Styled.Paragraph>
            </Card>
            <Card>
              <Styled.StyledHeading size="title">Produto</Styled.StyledHeading>
              <Styled.Paragraph>
                <Styled.Label>Nome:</Styled.Label> {order.productCategory.name}
              </Styled.Paragraph>
              <Styled.Paragraph>
                <Styled.Label>Status:</Styled.Label> {parsedStatus}
              </Styled.Paragraph>
            </Card>
          </Col>
          <Col sm={8} md={8} style={{ paddingRight: 0 }}>
            <Tab
              headers={['Observações', 'Comunicação']}
              content={[
                <ObsForm
                  onSaveObs={onSaveObs}
                  observations={order.observations}
                />,
                <SMSForm
                  onSaveSms={onSaveSms}
                  communications={order.communications}
                />,
              ]}
            />
          </Col>
        </Styled.ContentRow>
      </Container>
    </Layout>
  );
};

export default OrderDetail;
