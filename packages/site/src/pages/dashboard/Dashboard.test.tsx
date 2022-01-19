import React from 'react';

import userEvent from '@testing-library/user-event';

import { fireEvent, render, waitFor } from '~/test/utils';

import ForgotPassword from './Dashboard';

const onForgotPassword = jest.fn();

describe('ForgotPassword', () => {
  it('should render correctly', async () => {
    const { queryByTestId } = render(
      <ForgotPassword data-testid="home" onForgotPassword={onForgotPassword} />,
    );

    const home = queryByTestId('home');

    expect(home).toBeInTheDocument();
    expect(home).toMatchSnapshot();
  });

  it('should show error when email is empty', async () => {
    const { getByTestId, getByText } = render(
      <ForgotPassword onForgotPassword={onForgotPassword} />,
    );

    const button = getByTestId('forgot-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('E-mail é obrigatório')).toBeTruthy());
  });

  it('should show error when email is invalid', async () => {
    const { getAllByRole, getByTestId, getByText } = render(
      <ForgotPassword onForgotPassword={onForgotPassword} />,
    );

    const [emailInput] = getAllByRole('textbox');
    userEvent.type(emailInput, 'invalid-email.com');

    const button = getByTestId('forgot-button');
    fireEvent.click(button);

    await waitFor(() => expect(getByText('E-mail inválido')).toBeTruthy());
  });

  it('should get forgot password data when clicked in forgot button', async () => {
    const { getAllByRole, getByTestId } = render(
      <ForgotPassword onForgotPassword={onForgotPassword} />,
    );

    const [emailInput, codeInput] = getAllByRole('textbox');
    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(codeInput, 'code');

    const button = getByTestId('forgot-button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(onForgotPassword.mock.calls[0][0]).toEqual({
        email: 'email@email.com',
      });
    });
  });
});
