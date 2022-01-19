import React from 'react';

import { render } from '~/test/utils';

import Paragraph from './Paragraph';

describe('Paragraph', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Paragraph>Paragraph</Paragraph>);

    const textElement = getByText('Paragraph');

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(/^Paragraph$/);

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text display', () => {
    const { getByText } = render(
      <Paragraph size="display">Paragraph</Paragraph>,
    );

    const textElement = getByText('Paragraph');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text headline', () => {
    const { getByText } = render(
      <Paragraph size="headline">Paragraph</Paragraph>,
    );

    const textElement = getByText('Paragraph');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text title', () => {
    const { getByText } = render(<Paragraph size="title">Paragraph</Paragraph>);

    const textElement = getByText('Paragraph');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text subheader', () => {
    const { getByText } = render(
      <Paragraph size="subheader">Paragraph</Paragraph>,
    );

    const textElement = getByText('Paragraph');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text body', () => {
    const { getByText } = render(<Paragraph size="body">Paragraph</Paragraph>);

    const textElement = getByText('Paragraph');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });

  it('should render a text small', () => {
    const { getByText } = render(<Paragraph size="small">Paragraph</Paragraph>);

    const textElement = getByText('Paragraph');

    expect(textElement).toBeInTheDocument();

    expect(textElement).toMatchSnapshot();
  });
});
