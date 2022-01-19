import React, { BaseHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface HeadingProps
  extends BaseHTMLAttributes<HTMLHeadingElement>,
    Styled.StyledHeadingProps {
  /**
   * Heading Content
   */
  children: ReactNode;
}

const Heading = ({ children, size, ...rest }: HeadingProps) => {
  return (
    <Styled.Heading size={size} {...rest}>
      {children}
    </Styled.Heading>
  );
};

export default Heading;
