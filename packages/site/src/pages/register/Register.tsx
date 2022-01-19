import React, { BaseHTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Col, Container, Row } from 'react-grid-system';
import { FaPlus } from 'react-icons/fa';

import { FormControl, Input, Heading, Button, Paragraph } from '@site/uikit';
import Link from 'next/link';

import { RegisterFormValues } from './RegisterContainer';
import * as Styled from './styles';

interface RegisterProps extends BaseHTMLAttributes<HTMLDivElement> {
  onRegister: (values: RegisterFormValues) => void;
  form: UseFormReturn;
  isLoading?: boolean;
}

function Register({ onRegister, form, isLoading, ...props }: RegisterProps) {
  return (
    <Styled.Background {...props}>
      <Container>
        <Row>
          <Col sm={6} md={6}>
            <Styled.Logo src="/images/logo.png" alt="Correta.app" />
            <Styled.StyledHeading size="headline">
              Cadastre-se gratuitamente
            </Styled.StyledHeading>
            <form onSubmit={form.handleSubmit(onRegister)}>
              <FormControl
                label="Nome:"
                error={form.formState.errors?.name?.message}
              >
                <Input
                  name="name"
                  placeholder="Seu Nome"
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
                label="Senha:"
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
              <Styled.RegisterContainer>
                <Button
                  data-testid="register-button"
                  type="submit"
                  isLoading={isLoading}
                >
                  Cadastrar
                </Button>
              </Styled.RegisterContainer>
              <Styled.LoginContainer>
                <Paragraph size="small">Já tem cadastro?</Paragraph>
                <Link href="/">
                  <Button variant="ghost">Fazer Login</Button>
                </Link>
              </Styled.LoginContainer>
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

export default Register;
