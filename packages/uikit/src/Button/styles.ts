import styled, { css } from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export type StyledButtonProps = {
  size?: 'medium' | 'small';

  variant?: 'solid' | 'ghost';

  disabled?: boolean;
};

const variantModifier = {
  solid: css`
    border: 2px solid ${({ theme }) => theme.colors['blue-200']};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors['blue-200']};

    &:hover {
      background: ${({ theme }) => theme.colors['blue-300']};
      border: 2px solid ${({ theme }) => theme.colors['blue-300']};
    }

    &:active {
      background: ${({ theme }) => theme.colors['blue-200']};
      border: 2px solid rgba(4, 88, 242, 0.5);
    }
  `,
  ghost: css`
    color: ${({ theme }) => theme.colors['blue-200']};
    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors['blue-200']};

    &:hover {
      background: ${({ theme }) => theme.colors['blue-200']};
      border: 2px solid ${({ theme }) => theme.colors['blue-200']};
      color: ${({ theme }) => theme.colors['blue-400']};
    }

    &:active {
      background: ${({ theme }) => theme.colors['blue-200']};
      color: ${({ theme }) => theme.colors['blue-400']};
      border: 2px solid rgba(4, 88, 242, 0.5);
    }
  `,
};

const sizeModifier = {
  medium: css`
    padding: 8px 16px;
    ${({ theme }) => theme.typography['subheader-heavy']};
  `,
  small: css`
    padding: 6px 12px;
    ${({ theme }) => theme.colors['body-heavy']};
  `,
};

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return !['loading'].includes(prop as string) && defaultValidatorFn(prop);
  },
})<StyledButtonProps>`
  border-radius: 4px;
  cursor: ${({ disabled = false }) => (disabled ? 'not-allowed' : 'pointer')};
  text-align: center;

  div {
    display: inline;
    margin-left: 5px;
  }

  ${({ variant = 'solid' }) => variantModifier[variant]}
  ${({ size = 'medium' }) => sizeModifier[size]}
`;
