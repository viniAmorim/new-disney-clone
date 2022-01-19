/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';

import { render } from '~/test/utils';

import Input from '../Input';
import FormControl from './FormControl';

describe('Input', () => {
  it('Should render the component', () => {
    const { getByRole } = render(
      <FormControl label="Label input text default" isValid>
        <Input placeholder="Text content for input" />
      </FormControl>,
    );

    const FormControlElement = getByRole('textbox');

    expect(FormControlElement).toBeInTheDocument();
    expect(FormControlElement).toMatchSnapshot();
  });
});
