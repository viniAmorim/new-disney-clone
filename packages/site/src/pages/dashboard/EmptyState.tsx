import React from 'react';
import { Col, Row } from 'react-grid-system';

import { Paragraph } from '@site/uikit';

import CreateOrderContainer from '../createOrder/CreateOrderContainer';
import * as Styled from './styles';

interface EmptyStateProps {
  onRefresh: () => void;
}

const EmptyState = ({ onRefresh }: EmptyStateProps) => (
  <Styled.EmptyStateContainer>
    <Row align="center">
      <Col sm={6} md={6}>
        <Styled.StyledHeading size="headline">
          Comece agora a ter total controle do seu processo de vendas.
        </Styled.StyledHeading>
        <Paragraph size="title">
          Cadastre suas oportunidades de vendas e seus clientes
        </Paragraph>
        <CreateOrderContainer
          onRefresh={onRefresh}
          label="Cadastrar nova oportunidade e cliente"
        />
      </Col>
      <Col sm={6} md={6}>
        <img
          src="/images/order.png"
          alt="Comece agora a ter total controle do seu processo de vendas."
        />
      </Col>
    </Row>
  </Styled.EmptyStateContainer>
);

export default EmptyState;
