import React, { forwardRef } from 'react';

import * as Styled from './styles';

export interface InputProps extends Styled.StyledInputProps {
  /**
   * Placeholder
   */
  placeholder: string;
}

const Input = forwardRef(function({ isValid, mask, ...rest }: InputProps, ref) {
  if (mask) {
    return <Styled.Input ref={ref} isValid={isValid} {...rest} />;
  }

  return <Styled.RegularInput ref={ref} isValid={isValid} {...rest} />;
});

export default Input;
