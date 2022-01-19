import React, { BaseHTMLAttributes, forwardRef, ReactNode } from 'react';

import * as Styled from './styles';

export interface LinkProps extends BaseHTMLAttributes<HTMLAnchorElement> {
  /**
   * Link content.
   */
  children: ReactNode;
}

const Link = forwardRef<any, LinkProps>(
  ({ children, ...rest }: LinkProps, ref) => {
    return (
      <Styled.Link ref={ref} {...rest}>
        {children}
      </Styled.Link>
    );
  },
);

export default Link;
