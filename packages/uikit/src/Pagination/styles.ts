import styled, { css } from 'styled-components';

export const Pagination = styled.div`
  display: flex;
`;

const activeModifier = {
  active: css`
    color: ${({ theme }) => theme.colors['blue-200']};
  `,
};

interface PaginationItemProps {
  active?: boolean;
}

export const PaginationItem = styled.div<PaginationItemProps>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px 0px 0px 4px;
  color: ${({ theme }) => theme.colors['blue-100']};
  cursor: pointer;
  margin: 0px 1px;
  padding: 8px 12px;

  ${({ active = false }) => active && activeModifier.active}
  ${({ theme }) => theme.typography['body-heavy']};
`;
