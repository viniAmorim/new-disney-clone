import React, { BaseHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface ParagraphProps
  extends BaseHTMLAttributes<HTMLParagraphElement>,
    Styled.StyledParagraphProps {
  /**
   * Paragraph Content
   */
  children: ReactNode;
}

const Paragraph = ({ children, size, ...rest }: ParagraphProps) => {
  return (
    <Styled.Paragraph size={size} {...rest}>
      {children}
    </Styled.Paragraph>
  );
};

export default Paragraph;
