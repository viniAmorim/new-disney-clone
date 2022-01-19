import React, { BaseHTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Col, Container, Row } from 'react-grid-system';
import { FaPlus } from 'react-icons/fa';

import {
  FormControl,
  Input,
  Heading,
  Button,
  Link,
  Paragraph,
} from '@site/uikit';
import NLink from 'next/link';

import * as Styled from './styles';
import { LoginFormValues } from './HomeContainer';

interface HomeProps extends BaseHTMLAttributes<HTMLDivElement> {
  onLogin: (values: LoginFormValues) => void;
  form: UseFormReturn;
  isLoading?: boolean;
}

function Home({ onLogin, form, isLoading = false, ...props }: HomeProps) {
  return (
    <Styled.Background {...props}>
      <Container>
        <Row>
          <Col sm={6} md={6}>
            <Styled.Logo src="/images/logo.png" alt="Correta.app" />
            <Styled.StyledHeading size="headline">Entrar</Styled.StyledHeading>
            <form onSubmit={form.handleSubmit(onLogin)}>
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
                  data-testid="password-input"
                  name="password"
                  placeholder="senha"
                  type="password"
                  {...form.register('password', {
                    required: true,
                    minLength: {
                      value: 5,
                      message: 'Senha é obrigatória',
                    },
                  })}
                />
              </FormControl>
              <Styled.ForgotPasswordContainer>
                <Button
                  data-testid="login-button"
                  type="submit"
                  isLoading={isLoading}
                >
                  Entrar
                </Button>
              </Styled.ForgotPasswordContainer>
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

export default Home;
