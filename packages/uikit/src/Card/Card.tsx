import React, { BaseHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface CardProps extends BaseHTMLAttributes<HTMLDivElement> {
  /**
   * Card Image
   */
  src: string;
}

const Card = ({ src, ...rest }: CardProps) => {
  return (
    <Styled.Card {...rest}>
      <Styled.CardImage src={src} />
    </Styled.Card>
  );
};

export default Card;
