import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';

import { useQuery } from '~/app/hooks';
import { CREATE_CUSTOMER } from '~/app/queries/createCustomer';

import CreateCustomer from './CreateCustomer';

export interface CreateCustomerFormValues {
  name: string;
  cellphone: string;
  email: string;
}

interface CreateCustomerProps {
  onRefresh: () => void;
  label?: string;
}

function CreateCustomerContainer({ onRefresh, label }: CreateCustomerProps) {
  const { addToast } = useToasts();
  const form = useForm();
  const modalRef = useRef<{
    closeModal: () => void;
  }>();

  const handleCustomerSuccess = () => {
    modalRef.current.closeModal();
    form.reset();
    addToast('Contato criado com sucesso.', {
      appearance: 'success',
      autoDismiss: true,
    });
    onRefresh();
  };

  const handleFail = (error: Error) => {
    console.log(error);
    form.setError('name', {
      type: 'manual',
      message: 'Houve um erro ao salvar o contato. Tente novamente mais tarde.',
    });
  };

  const customerMutation = useQuery({
    query: CREATE_CUSTOMER,
    onResult: handleCustomerSuccess,
    onFail: handleFail,
    useIsLoading: true,
  });

  // saving the order
  const handleSaveCustomer = (values: CreateCustomerFormValues) => {
    const { name, cellphone, email } = values;
    customerMutation.execute({
      name,
      cellphone,
      email,
    });
  };

  return (
    <CreateCustomer
      onSaveCustomer={handleSaveCustomer}
      form={form}
      isLoading={customerMutation.loading}
      modalRef={modalRef}
      label={label}
    />
  );
}

export default CreateCustomerContainer;
