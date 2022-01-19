import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';

import { useQuery } from '~/app/hooks';
import { Customer } from '~/app/protocols/Customer';
import { ProductCategory } from '~/app/protocols/ProductCategory';
import { CREATE_CUSTOMER } from '~/app/queries/createCustomer';
import { CREATE_ORDER } from '~/app/queries/createOrder';
import { GET_CUSTOMERS } from '~/app/queries/getCustomers';
import { GET_PRODUCT_CATEGORIES } from '~/app/queries/getProductCategories';

import CreateOrder from './CreateOrder';

export interface CreateOrderFormValues {
  name: string;
  cellphone: string;
  email: string;
  customerId: string;
  productCategoryId: string;
}

interface CreateOrderProps {
  onRefresh: () => void;
  label?: string;
}

function CreateOrderContainer({ onRefresh, label }: CreateOrderProps) {
  const { addToast } = useToasts();
  const form = useForm();
  const modalRef = useRef<{
    closeModal: () => void;
  }>();
  const [isNewCustomer, setIsNewCustomer] = useState(false);

  const handleOrderSuccess = () => {
    // close modal after save order
    if (modalRef.current) {
      modalRef.current.closeModal();
      form.reset();
      setIsNewCustomer(false);
      addToast('Oportunidade criada com sucesso.', {
        appearance: 'success',
        autoDismiss: true,
      });
      onRefresh();
    }
  };

  const handleCustomerSuccess = (value) => {
    orderMutation.execute({
      customerId: value.createCustomer.id,
      productCategoryId: form.getValues().productCategoryId,
    });
  };

  const handleFail = (error: Error) => {
    console.log(error);
    form.setError('productCategoryId', {
      type: 'manual',
      message: 'Houve um erro ao salvar o cliente. Tente novamente mais tarde.',
    });
  };

  const customerMutation = useQuery({
    query: CREATE_CUSTOMER,
    onResult: handleCustomerSuccess,
    onFail: handleFail,
    useIsLoading: true,
  });
  const orderMutation = useQuery({
    query: CREATE_ORDER,
    onResult: handleOrderSuccess,
    onFail: handleFail,
    useIsLoading: true,
  });
  const getCustomersQuery = useQuery<{
    getCustomers: { items: Customer[]; total: number };
  }>({ query: GET_CUSTOMERS, variables: { page: 1 } });
  const getProductCategoriesQuery = useQuery<{
    getProductCategories: ProductCategory[];
  }>({ query: GET_PRODUCT_CATEGORIES });

  const handleNewCustomer = () => {
    setIsNewCustomer(true);
  };

  // saving the order
  const handleSaveOrder = (values: CreateOrderFormValues) => {
    const { customerId, productCategoryId, name, cellphone, email } = values;
    if (name) {
      customerMutation.execute({
        name,
        cellphone,
        email,
      });
    }

    if (customerId) {
      orderMutation.execute({
        customerId,
        productCategoryId,
      });
    }
  };

  const handleRequestOpen = () => {
    getCustomersQuery.execute();
    getProductCategoriesQuery.execute();
  };

  return (
    <CreateOrder
      isNewCustomer={isNewCustomer}
      onNewCustomer={handleNewCustomer}
      onRequestOpen={handleRequestOpen}
      onSaveOrder={handleSaveOrder}
      customers={getCustomersQuery.response.getCustomers?.items}
      productCategories={
        getProductCategoriesQuery.response.getProductCategories
      }
      form={form}
      isLoading={customerMutation.loading || orderMutation.loading}
      modalRef={modalRef}
      label={label}
    />
  );
}

export default CreateOrderContainer;
