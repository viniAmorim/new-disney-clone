import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

import Register from './Register';

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

function RegisterContainer() {
  const router = useRouter();
  const form = useForm();
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegister(values: RegisterFormValues) {
    try {
      setIsLoading(true);
      await Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          name: values.name,
        },
      });
      router.push('/dashboard');
    } catch (e) {
      switch (e.code) {
        case 'InvalidPasswordException':
          form.setError('password', {
            type: 'manual',
            message: 'Sua senha não tem o tamanho suficiente.',
          });
          break;
        case 'UsernameExistsException':
          form.setError('name', {
            type: 'manual',
            message: 'Usuário já existente. Que tal recuperar a senha.',
          });
          break;
        default:
          form.setError('name', {
            type: 'manual',
            message: 'Erro ao fazer o cadastro.',
          });
          break;
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Register onRegister={handleRegister} form={form} isLoading={isLoading} />
  );
}

export default RegisterContainer;
