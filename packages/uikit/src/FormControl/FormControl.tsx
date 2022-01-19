import React, { BaseHTMLAttributes, cloneElement, ReactElement } from 'react';

import * as Styled from './styles';

export interface FormControlProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    Styled.StyledFormControlProps {
  /**
   * Error
   */
  error?: string;
  /**
   * Label
   */
  label: string;
  /**
   * FormControl content
   */
  children: ReactElement;
}

const FormControl = ({ error, label, children, ...rest }: FormControlProps) => {
  const Component = cloneElement(children, {
    isValid: error === undefined,
  });
  return (
    <Styled.FormControl {...rest}>
      {label && (
        <Styled.FormControlLabel isValid={error === undefined}>
          {label}
        </Styled.FormControlLabel>
      )}

      {Component}

      {error && <Styled.FormControlError>{error}</Styled.FormControlError>}
    </Styled.FormControl>
  );
};

export default FormControl;
