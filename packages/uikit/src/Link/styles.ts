import styled from 'styled-components';

export const Link = styled.a`
  color: ${({ theme }) => theme.colors['blue-200']};
  cursor: pointer;
  text-decoration: none;
  ${({ theme }) => theme.typography['subheader-light']};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors['blue-400']};
  }
`;
