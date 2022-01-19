/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';

import { act, fireEvent, render } from '~/test/utils';

import Input from './Input';

describe('Input', () => {
  it('Should render the component', () => {
    const { getByTestId } = render(
      <Input data-testid="input" placeholder="Text content for input" />,
    );

    const textFieldElement = getByTestId('input');

    expect(textFieldElement).toBeInTheDocument();
    expect(textFieldElement).toMatchSnapshot();
  });

  it('Should render a input error variant', () => {
    const { getByRole } = render(
      <Input isValid={false} placeholder="Text content for input" />,
    );

    const inputElement = getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toMatchSnapshot();
  });

  it('can have focus', () => {
    const { getByRole } = render(
      <Input placeholder="Text content for input" />,
    );

    const inputElement = getByRole('textbox');

    expect(inputElement).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(document.body, { key: 'TAB' });
      inputElement.focus();
    });

    expect(inputElement).toHaveFocus();

    expect(inputElement).toMatchSnapshot();
  });
});
