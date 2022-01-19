import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Skeleton from 'react-loading-skeleton';

import { Button, Pagination } from '@site/uikit';

import { Layout } from '~/app/components';
import { Customer } from '~/app/protocols/Customer';

import CreateCustomerContainer from '../createCustomer/CreateCustomerContainer';
import * as Styled from './styles';

interface CustomerProps {
  onRefresh: () => void;
  customers?: Customer[];
  isLoading: boolean;
  total: number;
  page: number;
  onPageChange: (page: number) => void;
}

const CustomerForm = ({
  customers = [],
  isLoading,
  onRefresh,
  total,
  page,
  onPageChange,
}: CustomerProps) => {
  return (
    <Layout>
      <Container>
        <Row justify="end">
          <Col sm={6} md={6}>
            <Styled.StyledHeading>Contatos</Styled.StyledHeading>
          </Col>
          <Styled.RightCol sm={6} md={6}>
            <CreateCustomerContainer onRefresh={onRefresh} />
          </Styled.RightCol>
        </Row>
        <Row>
          <Styled.StyledCol sm={12} md={12}>
            {isLoading && (
              <Skeleton height={65} style={{ margin: '8px 0px' }} count={3} />
            )}
            {customers.map((customer) => (
              <Styled.StyledCard
                key={customer.id}
                columns={[
                  <span>{customer.name}</span>,
                  <span>
                    {customer.phones.map((phone) => phone.phone).join(', ')}
                  </span>,
                  <span>{customer.email}</span>,
                  <Button size="small">Ver perfil</Button>,
                ]}
              />
            ))}
            <Styled.PaginationContainer>
              <Pagination
                size={total}
                current={page}
                onSelectPage={onPageChange}
              />
            </Styled.PaginationContainer>
          </Styled.StyledCol>
        </Row>
      </Container>
    </Layout>
  );
};

export default CustomerForm;
