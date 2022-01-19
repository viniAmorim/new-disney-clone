import styled, { css } from 'styled-components';

export type StyledHeadingProps = {
  size?: 'display' | 'headline' | 'title' | 'subheader' | 'body' | 'small';
};

const sizeModifier = {
  display: css`
    ${({ theme }) => theme.typography['display-heavy']}
    font-size: 36px;
    line-height: 48px;
  `,
  headline: css`
    ${({ theme }) => theme.typography['headline-heavy']}
    font-size: 24px;
    line-height: 32px;
  `,
  title: css`
    ${({ theme }) => theme.typography['title-heavy']}
    font-size: 20px;
    line-height: 28px;
  `,
  subheader: css`
    ${({ theme }) => theme.typography['subheader-heavy']}
    font-size: 16px;
    line-height: 24px;
  `,
  body: css`
    ${({ theme }) => theme.typography['body-heavy']}
    font-size: 14px;
    line-height: 20px;
  `,
  small: css`
    ${({ theme }) => theme.typography['small-heavy']}
    font-size: 12px;
    line-height: 16px;
  `,
};

export const Heading = styled.h1<StyledHeadingProps>`
  ${({ size = 'display' }) => sizeModifier[size]}
`;
