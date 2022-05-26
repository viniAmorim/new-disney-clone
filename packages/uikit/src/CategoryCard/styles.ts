import styled from 'styled-components';

export const CategoryCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.main};
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 10px;
  filter: drop-shadow(5px 5px 10px #000);
`;

export const CategoryCardImage = styled.img`
  width: 60%;
  border-radius: 5px;
`;
