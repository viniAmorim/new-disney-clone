import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

import Home from './Home';

export interface LoginFormValues {
  email: string;
  password: string;
}

function HomeContainer() {
  const router = useRouter();
  const form = useForm();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(values: LoginFormValues) {
    try {
      setIsLoading(true);
      await Auth.signIn({
        username: values.email,
        password: values.password,
      });

      await Auth.currentSession();
      router.push('/dashboard');
    } catch (e) {
      console.log(e);
      switch (e.code) {
        case 'NotAuthorizedException':
          form.setError('email', {
            type: 'manual',
            message: 'Login e/ou senha inválido.',
          });
          break;
        default:
          form.setError('email', {
            type: 'manual',
            message: 'Erro ao fazer o login.',
          });
          break;
      }
    } finally {
      setIsLoading(false);
    }
  }

  return <Home onLogin={handleLogin} form={form} isLoading={isLoading} />;
}

export default HomeContainer;
