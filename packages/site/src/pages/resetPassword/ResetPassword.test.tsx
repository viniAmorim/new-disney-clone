import React from 'react';

import userEvent from '@testing-library/user-event';

import { fireEvent, render, waitFor } from '~/test/utils';

import ResetPassword from './ResetPassword';

const onResetPassword = jest.fn();

describe('ResetPassword', () => {
  it('should render correctly', async () => {
    const { queryByTestId } = render(
      <ResetPassword data-testid="home" onResetPassword={onResetPassword} />,
    );

    const home = queryByTestId('home');

    expect(home).toBeInTheDocument();
    expect(home).toMatchSnapshot();
  });

  it('should show error when email is empty', async () => {
    const { getByTestId, getByText } = render(
      <ResetPassword onResetPassword={onResetPassword} />,
    );

    const button = getByTestId('reset-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('E-mail é obrigatório')).toBeTruthy());
  });

  it('should show error when email is invalid', async () => {
    const { getAllByRole, getByTestId, getByText } = render(
      <ResetPassword onResetPassword={onResetPassword} />,
    );

    const [emailInput] = getAllByRole('textbox');
    userEvent.type(emailInput, 'invalid-email.com');

    const button = getByTestId('reset-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('E-mail inválido')).toBeTruthy());
  });

  it('should show error when code is empty', async () => {
    const { getAllByRole, getByTestId, getByText } = render(
      <ResetPassword onResetPassword={onResetPassword} />,
    );

    const [emailInput] = getAllByRole('textbox');
    userEvent.type(emailInput, 'email@email.com');

    const button = getByTestId('reset-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('Código é obrigatório')).toBeTruthy());
  });

  it('should show error when password is empty', async () => {
    const { getAllByRole, getByTestId, getByText } = render(
      <ResetPassword onResetPassword={onResetPassword} />,
    );

    const [emailInput, codeInput] = getAllByRole('textbox');
    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(codeInput, 'code');

    const button = getByTestId('reset-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('Senha é obrigatória')).toBeTruthy());
  });

  it('should show error when repeat password is empty', async () => {
    const { getAllByRole, getByTestId, getByText } = render(
      <ResetPassword onResetPassword={onResetPassword} />,
    );

    const [emailInput, codeInput] = getAllByRole('textbox');
    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(codeInput, 'code');

    const passwordInput = getByTestId('password-input');
    userEvent.type(passwordInput, 'password');

    const button = getByTestId('reset-button');
    fireEvent.click(button);

    await waitFor(() =>
      expect(getByText('Repetir Senha é obrigatória')).toBeTruthy(),
    );
  });

  it('should show error when repeat password is different from password field', async () => {
    const { getAllByRole, getByTestId, getByText } = render(
      <ResetPassword onResetPassword={onResetPassword} />,
    );

    const [emailInput, codeInput] = getAllByRole('textbox');
    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(codeInput, 'code');

    const passwordInput = getByTestId('password-input');
    userEvent.type(passwordInput, 'password');

    const repeatPasswordInput = getByTestId('repeat-password-input');
    userEvent.type(repeatPasswordInput, 'password2');

    const button = getByTestId('reset-button');
    fireEvent.click(button);

    await waitFor(() =>
      expect(
        getByText('Senha e Repetir senha precisam ser iguais.'),
      ).toBeTruthy(),
    );
  });

  it('should get reset password data when clicked in reset button', async () => {
    const { getAllByRole, getByTestId } = render(
      <ResetPassword onResetPassword={onResetPassword} />,
    );

    const [emailInput, codeInput] = getAllByRole('textbox');
    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(codeInput, 'code');

    const passwordInput = getByTestId('password-input');
    userEvent.type(passwordInput, 'password');

    const repeatPasswordInput = getByTestId('repeat-password-input');
    userEvent.type(repeatPasswordInput, 'password');

    const button = getByTestId('reset-button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(onResetPassword.mock.calls[0][0]).toEqual({
        code: 'code',
        email: 'email@email.com',
        password: 'password',
        repeatPassword: 'password',
      });
    });
  });
});
