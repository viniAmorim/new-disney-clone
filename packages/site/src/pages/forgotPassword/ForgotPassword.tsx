import React, { BaseHTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Col, Container, Row } from 'react-grid-system';
import { FaPlus } from 'react-icons/fa';

import { FormControl, Input, Heading, Button, Paragraph } from '@site/uikit';
import Link from 'next/link';

import { ForgotPasswordFormValues } from './ForgotPasswordContainer';
import * as Styled from './styles';

interface ForgotPasswordProps extends BaseHTMLAttributes<HTMLDivElement> {
  onForgotPassword: (values: ForgotPasswordFormValues) => void;
  form: UseFormReturn;
  isLoading?: boolean;
}

function ForgotPassword({
  onForgotPassword,
  form,
  isLoading,
  ...props
}: ForgotPasswordProps) {
  return (
    <Styled.Background {...props}>
      <Container>
        <Row>
          <Col sm={6} md={6}>
            <Styled.Logo src="/images/logo.png" alt="Correta.app" />
            <Styled.StyledHeading size="headline">
              Recuperar senha
            </Styled.StyledHeading>
            <form onSubmit={form.handleSubmit(onForgotPassword)}>
              <FormControl
                label="E-mail:"
                error={form.formState.errors?.email?.message}
              >
                <Input
                  name="email"
                  placeholder="seu@email.com"
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
              <Styled.ForgotPasswordContainer>
                <Button
                  data-testid="forgot-button"
                  type="submit"
                  isLoading={isLoading}
                >
                  Recuperar
                </Button>
              </Styled.ForgotPasswordContainer>
              <Styled.RegisterContainer>
                <Paragraph size="small">Ainda não tem cadastro?</Paragraph>
                <Link href="/register">
                  <Button variant="ghost">Cadastre-se gratuitamente</Button>
                </Link>
              </Styled.RegisterContainer>
            </form>
          </Col>
          <Styled.ContentCol sm={6} md={6}>
            <Styled.ContentContainer>
              <img src="/images/home.png" alt="Correta.app" />
              <span>
                <FaPlus />
                <Heading size="display">facilidade</Heading>
              </span>
              <span>
                <FaPlus />
                <Heading size="display">resultados</Heading>
              </span>
              <Paragraph size="headline">
                Tenha acesso e controle de seus cliente, melhorando seu processo
                de vendas e gerando mais resultados.
              </Paragraph>
            </Styled.ContentContainer>
          </Styled.ContentCol>
        </Row>
      </Container>
    </Styled.Background>
  );
}

export default ForgotPassword;
