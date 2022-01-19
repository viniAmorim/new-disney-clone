import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

import ForgotPassword from './ForgotPassword';

export interface ForgotPasswordFormValues {
  email: string;
}

function ForgotPasswordContainer() {
  const router = useRouter();
  const form = useForm();
  const [isLoading, setIsLoading] = useState(false);

  async function handleForgotPassword(values: ForgotPasswordFormValues) {
    try {
      setIsLoading(true);
      await Auth.forgotPassword(values.email);
      router.push('/reset-password');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ForgotPassword
      onForgotPassword={handleForgotPassword}
      isLoading={isLoading}
      form={form}
    />
  );
}

export default ForgotPasswordContainer;
