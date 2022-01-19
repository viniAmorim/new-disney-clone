import React, { BaseHTMLAttributes, Ref } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Modal, FormControl, Button, Input } from '@site/uikit';

import { PhoneField } from '~/app/components';

import * as Styled from './styles';

export interface CreateCustomerFormValues {
  name: string;
  cellphone: string;
  email: string;
}

interface ForgotPasswordProps extends BaseHTMLAttributes<HTMLDivElement> {
  onSaveCustomer: (values: CreateCustomerFormValues) => void;
  isLoading?: boolean;
  form: UseFormReturn;
  modalRef: Ref<Modal>;
  label?: string;
}

function CreateCustomer({
  onSaveCustomer,
  isLoading = false,
  form,
  modalRef,
}: ForgotPasswordProps) {
  return (
    <Modal
      label="Novo contato"
      title="Novo contato"
      width={600}
      appElement="#__next"
      ref={modalRef}
    >
      <form onSubmit={form.handleSubmit(onSaveCustomer)}>
        <FormControl
          label="Cliente:"
          error={form.formState.errors?.name?.message}
        >
          <Input
            name="name"
            placeholder="Nome do cliente"
            {...form.register('name', {
              required: true,
              minLength: {
                value: 5,
                message: 'Nome é obrigatório',
              },
            })}
          />
        </FormControl>
        <FormControl
          label="Telefone:"
          error={form.formState.errors?.cellphone?.message}
        >
          <PhoneField
            control={form.control}
            name="cellphone"
            rules={{
              required: {
                value: true,
                message: 'Telefone é obrigatório',
              },
            }}
          />
        </FormControl>
        <FormControl
          label="E-mail:"
          error={form.formState.errors?.email?.message}
        >
          <Input
            name="email"
            placeholder="oportunidade@email.com"
            {...form.register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'E-mail inválido.',
              },
              minLength: {
                value: 5,
                message: 'E-mail é obrigatório',
              },
            })}
          />
        </FormControl>
        <Styled.ButtonContainer>
          <Button isLoading={isLoading} type="submit">
            Salvar
          </Button>
        </Styled.ButtonContainer>
      </form>
    </Modal>
  );
}

export default CreateCustomer;
