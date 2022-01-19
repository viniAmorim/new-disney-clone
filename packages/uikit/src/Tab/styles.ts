import 'react-tabs/style/react-tabs.css';
import { Tabs } from 'react-tabs';

import styled from 'styled-components';

export const StyledTabs = styled(Tabs)`
  ul {
    border-bottom: 0px;
    list-style: none;
    margin-top: 10px;

    .react-tabs__tab {
      color: ${({ theme }) => theme.colors['blue-100']};
      cursor: pointer;
      display: inline;
      padding: 12px 24px;
      ${({ theme }) => theme.typography['subheader-heavy']}

      &:hover {
        color: ${({ theme }) => theme.colors['blue-200']};
      }

      &--selected {
        border: none;
        background: ${({ theme }) => theme.colors['blue-100']};
        border-radius: 4px;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
