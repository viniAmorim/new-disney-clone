import styled from 'styled-components';

export type StyledFormControlProps = {
  isValid: boolean;
};

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const FormControlLabel = styled.label<StyledFormControlProps>`
  color: ${({ theme }) => theme.colors['blue-100']};
  height: 24px;
  margin: 6px 0px;
  width: 229px;
  ${({ theme }) => theme.typography['subheader-heavy']};
`;

export const FormControlError = styled.label`
  color: ${({ theme }) => theme.colors.error};
  margin-top: 6px;
`;
