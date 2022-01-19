import { Col } from 'react-grid-system';

import { Heading, Alert } from '@site/uikit';
import styled from 'styled-components';

export const Logo = styled.img`
  margin-top: 30px;
  margin-bottom: 90px;

  @media (min-width: 768px) {
    margin-top: 130px;
  }
`;

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors['blue-200']};
  margin-bottom: 48px;
`;

export const Background = styled.div`
  height: 100%;

  @media (min-width: 768px) {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.white} 50%,
      ${({ theme }) => theme.colors['blue-100']} 50%
    );
  }
`;

export const ContentCol = styled(Col)`
  background: ${({ theme }) => theme.colors['blue-100']};
  margin-top: 10px;

  @media (min-width: 768px) {
    background: initial;
  }
`;

export const ContentContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 30px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 130px;

    img {
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 130px;
    margin-left: 100px;
  }

  span {
    align-items: center;
    display: flex;
    flex-direction: row;

    svg {
      color: ${({ theme }) => theme.colors['blue-400']};
      margin-right: 10px;
    }
  }
`;

export const RegisterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

export const LoginContainer = styled.div`
  margin-top: 72px;
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors['blue-100']};
    margin-bottom: 12px;
  }
`;

export const StyledAlert = styled(Alert)`
  margin-bottom: 24px;
`;
