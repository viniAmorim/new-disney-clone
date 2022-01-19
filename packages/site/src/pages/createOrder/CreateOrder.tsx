import React, { BaseHTMLAttributes, Ref } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Modal, FormControl, Button, Input } from '@site/uikit';

import { PhoneField, SelectWrapper } from '~/app/components';
import { Customer } from '~/app/protocols/Customer';
import { ProductCategory } from '~/app/protocols/ProductCategory';

import * as Styled from './styles';

export interface CreateOrderFormValues {
  name: string;
  cellphone: string;
  email: string;
  customerId: string;
  productCategoryId: string;
}

interface CreateOrderProps extends BaseHTMLAttributes<HTMLDivElement> {
  isNewCustomer: boolean;
  onRequestOpen: () => void;
  onNewCustomer: () => void;
  onSaveOrder: (values: CreateOrderFormValues) => void;
  customers?: Customer[];
  productCategories?: ProductCategory[];
  isLoading?: boolean;
  form: UseFormReturn;
  modalRef: Ref<Modal>;
  label?: string;
}

function CreateOrder({
  onRequestOpen,
  onNewCustomer,
  onSaveOrder,
  isNewCustomer,
  customers = [],
  productCategories = [],
  isLoading = false,
  form,
  modalRef,
  label = 'Nova oportunidade',
}: CreateOrderProps) {
  return (
    <Modal
      label={label}
      title={label}
      width={600}
      appElement="#__next"
      onRequestOpen={onRequestOpen}
      ref={modalRef}
    >
      <form onSubmit={form.handleSubmit(onSaveOrder)}>
        {isNewCustomer && (
          <>
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
          </>
        )}
        {!isNewCustomer && (
          <FormControl
            label="Cliente:"
            error={form.formState.errors?.customerId?.message}
          >
            <SelectWrapper
              control={form.control}
              name="customerId"
              placeholder="Nome do cliente"
              rules={{
                required: {
                  value: true,
                  message: 'Cliente é obrigatório',
                },
              }}
              bottomChildren={
                <Styled.NewClientContainer>
                  <Styled.NewClientButton
                    type="button"
                    onClick={onNewCustomer}
                    size="small"
                  >
                    cadastrar novo cliente
                  </Styled.NewClientButton>
                </Styled.NewClientContainer>
              }
              options={customers.map((customer) => ({
                value: customer.id,
                label: customer.name,
              }))}
            />
          </FormControl>
        )}
        <FormControl
          label="Produto:"
          error={form.formState.errors?.productCategoryId?.message}
        >
          <SelectWrapper
            control={form.control}
            name="productCategoryId"
            placeholder="Produto"
            rules={{
              required: {
                value: true,
                message: 'Produto é obrigatório',
              },
            }}
            options={productCategories.map((productCategory) => ({
              value: productCategory.id,
              label: productCategory.name,
            }))}
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

export default CreateOrder;
