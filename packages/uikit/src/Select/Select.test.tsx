import React from 'react';

import { render } from '~/test/utils';

import Select from './Select';

describe('Select', () => {
  it('should render correctly', () => {
    const { getByText, getByRole, container } = render(
      <Select
        name="flavor"
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
      />,
    );

    const selectInput = getByText('Select...');

    expect(selectInput).toBeInTheDocument();

    expect(getByRole('textbox')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
