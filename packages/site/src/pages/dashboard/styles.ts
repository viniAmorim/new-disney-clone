import { Col, Container } from 'react-grid-system';
import Board from 'react-trello';

import { Heading } from '@site/uikit';
import styled from 'styled-components';

export const ButtonContainer = styled(Col)`
  margin: 24px 0px;
  text-align: right;
`;

export const StyledBoard = styled(Board)`
  background: ${({ theme }) => theme.colors['gray-500']};

  .react-trello-lane {
    background: transparent;
    color: ${({ theme }) => theme.colors['blue-100']};
    ${({ theme }) => theme.typography['subheader-heavy']};

    header span:last-of-type {
      padding-right: 0px;

      span {
        background: ${({ theme }) => theme.colors['gray-400']};
        border-radius: 8px;
        color: ${({ theme }) => theme.colors['blue-200']};
        padding: 5px;
        ${({ theme }) => theme.typography['body-heavy']};
      }
    }
  }

  .react-trello-card {
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors['gray-400']};
    box-sizing: border-box;
    border-radius: 4px;

    header {
      border: none;
      color: ${({ theme }) => theme.colors['blue-100']};
      ${({ theme }) => theme.typography['body-heavy']};
    }

    .sc-gXfVKN {
      color: ${({ theme }) => theme.colors['gray-200']};
      ${({ theme }) => theme.typography['small-light']};
    }
  }
`;

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors['blue-100']};
`;

export const EmptyStateContainer = styled(Container)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  margin-top: 100px;
  padding: 32px;

  p {
    margin: 8px 0px;
  }
`;
