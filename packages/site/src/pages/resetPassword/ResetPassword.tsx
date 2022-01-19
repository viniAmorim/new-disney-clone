import React, { BaseHTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Col, Container, Row } from 'react-grid-system';
import { FaPlus } from 'react-icons/fa';

import { FormControl, Input, Heading, Button, Paragraph } from '@site/uikit';
import Link from 'next/link';

import * as Styled from './styles';
import { ResetPasswordFormValues } from './ResetPasswordContainer';

interface ResetPasswordProps extends BaseHTMLAttributes<HTMLDivElement> {
  onResetPassword: (values: ResetPasswordFormValues) => void;
  form: UseFormReturn;
  isLoading?: boolean;
}

function ResetPassword({
  onResetPassword,
  form,
  isLoading,
  ...props
}: ResetPasswordProps) {
  return (
    <Styled.Background {...props}>
      <Container>
        <Row>
          <Col sm={6} md={6}>
            <Styled.Logo src="/images/logo.png" alt="Correta.app" />
            <Styled.StyledHeading size="headline">
              Nova senha
            </Styled.StyledHeading>
            <form onSubmit={form.handleSubmit(onResetPassword)}>
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
              <FormControl
                label="Código:"
                error={form.formState.errors?.code?.message}
              >
                <Input
                  name="code"
                  placeholder="Código recebido no e-mail"
                  {...form.register('code', {
                    required: true,
                    minLength: {
                      value: 2,
                      message: 'Código é obrigatório',
                    },
                  })}
                />
              </FormControl>
              <FormControl
                label="Nova Senha:"
                error={form.formState.errors?.password?.message}
              >
                <Input
                  name="password"
                  type="password"
                  placeholder="password"
                  {...form.register('password', {
                    required: true,
                    minLength: {
                      value: 5,
                      message: 'Senha é obrigatório',
                    },
                  })}
                  data-testid="password-input"
                />
              </FormControl>
              <FormControl
                label="Repetir Senha:"
                error={form.formState.errors?.repeatPassword?.message}
              >
                <Input
                  name="repeatPassword"
                  type="password"
                  placeholder="password"
                  {...form.register('repeatPassword', {
                    required: true,
                    minLength: {
                      value: 5,
                      message: 'Repetir Senha é obrigatório',
                    },
                    validate: value => {
                      if (value === form.getValues()['password']) {
                        return true;
                      } else {
                        return 'Senha e Repetir senha precisam ser iguais.';
                      }
                    },
                  })}
                  data-testid="repeat-password-input"
                />
              </FormControl>
              <Styled.ResetPasswordContainer>
                <Button
                  data-testid="reset-button"
                  type="submit"
                  isLoading={isLoading}
                >
                  Criar nova senha
                </Button>
              </Styled.ResetPasswordContainer>
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

export default ResetPassword;
