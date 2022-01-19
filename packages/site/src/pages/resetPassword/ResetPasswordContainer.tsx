import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

import ResetPassword from './ResetPassword';

export interface ResetPasswordFormValues {
  email: string;
  code: string;
  password: string;
  repeatPassword: string;
}

function ResetPasswordContainer() {
  const router = useRouter();
  const form = useForm();
  const [isLoading, setIsLoading] = useState(false);

  async function handleResetPassword(values: ResetPasswordFormValues) {
    try {
      setIsLoading(true);
      await Auth.forgotPasswordSubmit(
        values.email,
        values.code,
        values.password,
      );
      router.push('/');
    } catch (e) {
      switch (e.code) {
        case 'InvalidPasswordException':
          form.setError('password', {
            type: 'manual',
            message: 'Sua senha não tem o tamanho suficiente.',
          });
          break;
        default:
          form.setError('password', {
            type: 'manual',
            message: 'Erro ao mudar sua senha.',
          });
          break;
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ResetPassword
      onResetPassword={handleResetPassword}
      form={form}
      isLoading={isLoading}
    />
  );
}

export default ResetPasswordContainer;
