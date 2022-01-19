import React from 'react';

import { render } from '~/test/utils';

import Alert from './Alert';

describe('Alert', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Alert data-testid="alert">Alert</Alert>);

    const alertElement = getByTestId('alert');

    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveTextContent(/^Alert$/);

    expect(alertElement).toMatchSnapshot();
  });
});
