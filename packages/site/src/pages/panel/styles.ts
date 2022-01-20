import { Row, Col } from 'react-grid-system';

import { Heading, Card } from '@site/uikit';
import styled from 'styled-components';

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};
`;

export const Franchise = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledCol = styled(Col)`
  margin-left: 10px;
  padding-left: 10px
`;

export const RightCol = styled(Col)`
  text-align: right;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;