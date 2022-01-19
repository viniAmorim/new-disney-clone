import React from 'react';

import { render } from '~/test/utils';

import Heading from './Heading';

describe('Heading', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Heading>Heading</Heading>);

    const textElement = getByText('Heading');

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(/^Heading$/);

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text display', () => {
    const { getByText } = render(<Heading size="display">Heading</Heading>);

    const textElement = getByText('Heading');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text headline', () => {
    const { getByText } = render(<Heading size="headline">Heading</Heading>);

    const textElement = getByText('Heading');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text title', () => {
    const { getByText } = render(<Heading size="title">Heading</Heading>);

    const textElement = getByText('Heading');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text subheader', () => {
    const { getByText } = render(<Heading size="subheader">Heading</Heading>);

    const textElement = getByText('Heading');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text body', () => {
    const { getByText } = render(<Heading size="body">Heading</Heading>);

    const textElement = getByText('Heading');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text small', () => {
    const { getByText } = render(<Heading size="small">Heading</Heading>);

    const textElement = getByText('Heading');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });
});
