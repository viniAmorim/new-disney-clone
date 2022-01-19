import React from 'react';

import userEvent from '@testing-library/user-event';

import { fireEvent, render, waitFor } from '~/test/utils';

import Home from './Home';

const onLogin = jest.fn();

describe('Home', () => {
  it('should render correctly', async () => {
    const { queryByTestId } = render(
      <Home data-testid="home" onLogin={onLogin} />,
    );

    const home = queryByTestId('home');

    expect(home).toBeInTheDocument();
    expect(home).toMatchSnapshot();
  });

  it('should show error when email is empty', async () => {
    const { getByTestId, getByText } = render(<Home onLogin={onLogin} />);

    const button = getByTestId('login-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('E-mail é obrigatório')).toBeTruthy());
  });

  it('should show error when email is empty', async () => {
    const { getByRole, getByTestId, getByText } = render(
      <Home onLogin={onLogin} />,
    );

    const emailInput = getByRole('textbox');
    userEvent.type(emailInput, 'invalid-email.com');

    const button = getByTestId('login-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('E-mail inválido')).toBeTruthy());
  });

  it('should show error when password is empty', async () => {
    const { getByRole, getByTestId, getByText } = render(
      <Home onLogin={onLogin} />,
    );

    const emailInput = getByRole('textbox');
    userEvent.type(emailInput, 'email@email.com');

    const button = getByTestId('login-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('Senha é obrigatória')).toBeTruthy());
  });

  it('should get login data when clicked in login button', async () => {
    const { getByRole, getByTestId } = render(<Home onLogin={onLogin} />);

    const emailInput = getByRole('textbox');
    userEvent.type(emailInput, 'email@email.com');

    const passwordInput = getByTestId('password-input');
    userEvent.type(passwordInput, 'password');

    const button = getByTestId('login-button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(onLogin.mock.calls[0][0]).toEqual({
        email: 'email@email.com',
        password: 'password',
      });
    });
  });
});
