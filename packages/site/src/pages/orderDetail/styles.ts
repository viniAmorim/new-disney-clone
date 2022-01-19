import { Col, Row } from 'react-grid-system';

import { Heading } from '@site/uikit';
import styled from 'styled-components';

export const StyledRow = styled(Row)`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: 4px;
  padding: 16px;
`;

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors['blue-100']};
`;

export const RightCol = styled(Col)`
  text-align: right;
`;

export const Paragraph = styled.p`
  ${({ theme }) => theme.typography['body-default']};
  margin-top: 8px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors['blue-100']};
  ${({ theme }) => theme.typography['body-heavy']};
`;

export const ContentRow = styled(Row)`
  margin-top: 16px;
`;

export const ObsContainer = styled.div`
  margin-top: 20px;
`;

export const ObsButtonContainer = styled.div`
  margin-top: 8px;
  text-align: right;
`;
