import React from 'react';

import userEvent from '@testing-library/user-event';

import { fireEvent, render, waitFor } from '~/test/utils';

import Register from './Register';

const onRegister = jest.fn();

describe('Register', () => {
  it('should render correctly', async () => {
    const { queryByTestId } = render(
      <Register data-testid="home" onRegister={onRegister} />,
    );

    const home = queryByTestId('home');

    expect(home).toBeInTheDocument();
    expect(home).toMatchSnapshot();
  });

  it('should show error when name is empty', async () => {
    const { getByTestId, getByText } = render(
      <Register onRegister={onRegister} />,
    );

    const button = getByTestId('register-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('Nome é obrigatório')).toBeTruthy());
  });

  it('should show error when email is empty', async () => {
    const { getByTestId, getAllByRole, getByText } = render(
      <Register onRegister={onRegister} />,
    );

    const [nameInput] = getAllByRole('textbox');
    userEvent.type(nameInput, 'Name');

    const button = getByTestId('register-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('E-mail é obrigatório')).toBeTruthy());
  });

  it('should show error when email is invalid', async () => {
    const { getAllByRole, getByTestId, getByText } = render(
      <Register onRegister={onRegister} />,
    );

    const [nameInput, emailInput] = getAllByRole('textbox');
    userEvent.type(nameInput, 'Name');
    userEvent.type(emailInput, 'invalid-email.com');

    const button = getByTestId('register-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('E-mail inválido')).toBeTruthy());
  });

  it('should show error when password is empty', async () => {
    const { getAllByRole, getByTestId, getByText } = render(
      <Register onRegister={onRegister} />,
    );

    const [nameInput, emailInput] = getAllByRole('textbox');
    userEvent.type(nameInput, 'Name');
    userEvent.type(emailInput, 'email@email.com');

    const button = getByTestId('register-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('Senha é obrigatória')).toBeTruthy());
  });

  it('should show error when repeat password is empty', async () => {
    const { getAllByRole, getByTestId, getByText } = render(
      <Register onRegister={onRegister} />,
    );

    const [nameInput, emailInput] = getAllByRole('textbox');
    userEvent.type(nameInput, 'Name');
    userEvent.type(emailInput, 'email@email.com');

    const passwordInput = getByTestId('password-input');
    userEvent.type(passwordInput, 'password');

    const button = getByTestId('register-button');
    fireEvent.click(button);

    await waitFor(() =>
      expect(getByText('Repetir Senha é obrigatória')).toBeTruthy(),
    );
  });

  it('should show error when repeat password is different from password field', async () => {
    const { getAllByRole, getByTestId, getByText } = render(
      <Register onRegister={onRegister} />,
    );

    const [nameInput, emailInput] = getAllByRole('textbox');
    userEvent.type(nameInput, 'Name');
    userEvent.type(emailInput, 'email@email.com');

    const passwordInput = getByTestId('password-input');
    userEvent.type(passwordInput, 'password');

    const repeatPasswordInput = getByTestId('repeat-password-input');
    userEvent.type(repeatPasswordInput, 'password2');

    const button = getByTestId('register-button');
    fireEvent.click(button);

    await waitFor(() =>
      expect(
        getByText('Senha e Repetir senha precisam ser iguais.'),
      ).toBeTruthy(),
    );
  });

  it('should get register data when clicked in register button', async () => {
    const { getAllByRole, getByTestId } = render(
      <Register onRegister={onRegister} />,
    );

    const [nameInput, emailInput] = getAllByRole('textbox');
    userEvent.type(nameInput, 'Name');
    userEvent.type(emailInput, 'email@email.com');

    const passwordInput = getByTestId('password-input');
    userEvent.type(passwordInput, 'password');

    const repeatPasswordInput = getByTestId('repeat-password-input');
    userEvent.type(repeatPasswordInput, 'password');

    const button = getByTestId('register-button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(onRegister.mock.calls[0][0]).toEqual({
        email: 'email@email.com',
        name: 'Name',
        password: 'password',
        repeatPassword: 'password',
      });
    });
  });
});
