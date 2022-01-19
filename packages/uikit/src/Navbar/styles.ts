import styled from 'styled-components';

export const Logo = styled.img`
  width: 150px;
  height: 80px;
  padding: 0px;
`;

export const Container = styled.div`
  background-color: #13151f;
  padding: 10px 0px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
`;

export const Item = styled.li`
  display: inline;
  margin: 0px 12px;
`;

interface LinkProps {
  active?: boolean;
}

export const Link = styled.a<LinkProps>`
  cursor: pointer;
  text-decoration: none;
  color: ${({ active = false, theme }) =>
    active ? theme.colors['blue-400'] : theme.colors.white};
  ${({ theme }) => theme.typography['subheader-heavy']};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors['blue-300']};
  }
`;

export const DropDownMenu = styled.ul`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  right: 0;
  list-style: none;
  padding: 15px 25px;
  position: absolute;
  top: 20px;
  width: max-content;

  margin-top: 50px;
  margin-right: 80px;

  a {
    color: ${({ theme }) => theme.colors['gray-100']};

    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.colors['blue-400']};
    }
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 15px;
  margin-top: -7px;
`;

