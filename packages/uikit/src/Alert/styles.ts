import styled, { css } from 'styled-components';

export type StyledAlertProps = {
  appearance?: 'success';
};

const appearanceModifier = {
  success: css`
    background: rgba(44, 211, 111);
    color: ${({ theme }) => theme.colors['gray-100']};
  `,
};

export const Alert = styled.div<StyledAlertProps>`
  transition: all 0.5s ease-out;

  border-radius: 4px;
  padding: 16px;
  position: fixed;
  top: 70px;
  right: 10px;

  ${({ appearance = 'success' }) => appearanceModifier[appearance]}
  ${({ theme }) => theme.typography['subheader-light']};
`;
