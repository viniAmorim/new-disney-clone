import React, { BaseHTMLAttributes, ReactNode } from 'react';

import * as Styled from './styles';

export interface AlertProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    Styled.StyledAlertProps {
  /**
   * Alert content.
   */
  children: ReactNode;
}

const Alert = ({ appearance = 'success', children, ...rest }: AlertProps) => {
  return (
    <Styled.Alert appearance={appearance} {...rest}>
      {children}
    </Styled.Alert>
  );
};

export default Alert;
