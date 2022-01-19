import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  background-color: #1e2841;
  border: 1px solid #1e2841;
  border-radius: 10px;
  filter: drop-shadow(5px 5px 10px #000);
`;

export const CardImage = styled.img`
  width: 80%;
  border-radius: 5px;
`;