import { Col } from 'react-grid-system';

import { Heading, Card } from '@site/uikit';
import styled from 'styled-components';

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors['blue-100']};
`;

export const RightCol = styled(Col)`
  text-align: right;
`;

export const StyledCol = styled(Col)`
  margin-top: 28px;
`;

export const StyledCard = styled(Card)`
  color: ${({ theme }) => theme.colors['blue-100']};
  ${({ theme }) => theme.typography['body-heavy']};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;
