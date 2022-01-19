import { NumberFormatProps } from 'react-number-format';

// semantic error TS4023: Exported variable
import NumberFormat from '../../../../node_modules/react-number-format/dist/react-number-format';

import styled, { css } from 'styled-components';

export interface StyledInputProps extends NumberFormatProps {
  isValid?: boolean;
}

const variantModifier = {
  default: css`
    border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  `,
  success: css`
    border: 1px solid ${({ theme }) => theme.colors.success};
  `,
  error: css`
    border: 1px solid ${({ theme }) => theme.colors.error};
  `,
};

const InputCss = css`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: 4px;
  padding: 12px 16px;

  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors['blue-300']};
    outline: none;

    ::placeholder {
      color: ${({ theme }) => theme.colors['gray-100']};
    }
  }
`;

export const Input = styled(NumberFormat).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return !['isValid'].includes(prop as string) && defaultValidatorFn(prop);
  },
})<StyledInputProps>`
  ${InputCss}

  ${({ isValid }) =>
    isValid ? variantModifier.default : variantModifier.error};
`;

export const RegularInput = styled.input.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['isValid'].includes(prop) && defaultValidatorFn(prop),
})<StyledInputProps>`
  ${InputCss}

  ${({ isValid }) =>
    isValid ? variantModifier.default : variantModifier.error};
`;

export const InputError = styled.text`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.error};
`;
