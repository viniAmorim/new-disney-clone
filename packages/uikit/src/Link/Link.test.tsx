import React from 'react';

import { render } from '~/test/utils';

import Link from './Link';

describe('Link', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Link href="https://correta.app">Link</Link>);

    const linkElement = getByRole('link');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent(/^Link$/);

    expect(linkElement).toMatchSnapshot();
  });
});
