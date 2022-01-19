import styled, { css } from 'styled-components';

export type StyledParagraphProps = {
  size?: 'display' | 'headline' | 'title' | 'subheader' | 'body' | 'small';
};

const sizeModifier = {
  display: css`
    ${({ theme }) => theme.typography['display-light']}
    font-size: 36px;
    line-height: 48px;
  `,
  headline: css`
    ${({ theme }) => theme.typography['headline-light']}
    font-size: 24px;
    line-height: 32px;
  `,
  title: css`
    ${({ theme }) => theme.typography['title-light']}
    font-size: 20px;
    line-height: 28px;
  `,
  subheader: css`
    ${({ theme }) => theme.typography['subheader-light']}
    font-size: 16px;
    line-height: 24px;
  `,
  body: css`
    ${({ theme }) => theme.typography['body-default']}
    font-size: 14px;
    line-height: 20px;
  `,
  small: css`
    ${({ theme }) => theme.typography['small-light']}
    font-size: 12px;
    line-height: 16px;
  `,
};

export const Paragraph = styled.p<StyledParagraphProps>`
  ${({ size = 'display' }) => sizeModifier[size]}
`;
