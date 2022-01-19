import React, { BaseHTMLAttributes } from 'react';

import * as Styled from './styles';

export interface PaginationProps extends BaseHTMLAttributes<HTMLDivElement> {
  size: number;
  current: number;
  onSelectPage: (page: number) => void;
}

const range = (from: number, to: number, step = 1) => {
  let i = from;
  const response: number[] = [];

  while (i <= to) {
    response.push(i);
    i += step;
  }

  return response;
};

const Pagination = ({
  size,
  current,
  onSelectPage,
  ...rest
}: PaginationProps) => {
  // ensure current page isn't out of range
  let currentPage = current;
  if (currentPage < 1) {
    currentPage = 1;
  }

  if (currentPage > size) {
    currentPage = size;
  }

  const items: {
    id: number;
    value: string | number;
  }[] = [];

  if (currentPage > 1) {
    items.push({ id: 1, value: '<<' });
  }

  let initial = currentPage - 2;
  let final = currentPage + 2;

  if (currentPage <= 1) {
    initial = currentPage;
    final = currentPage + 4;
  }

  if (currentPage === 2) {
    initial = currentPage - 1;
    final = currentPage + 3;
  }

  if (currentPage === size - 1) {
    initial = currentPage - 3;
    final = currentPage + 1;
  }

  if (currentPage === size) {
    initial = currentPage - 4;
    final = currentPage;
  }

  if (size <= 4) {
    initial = 1;
    final = size;
  }

  range(initial, final).forEach((item) => {
    items.push({ id: item, value: item });
  });

  if (current < size) {
    items.push({ id: size, value: '>>' });
  }

  return (
    <Styled.Pagination {...rest}>
      {items.map((item) => (
        <Styled.PaginationItem
          key={item.value}
          active={currentPage === item.id}
          onClick={() => onSelectPage(item.id)}
        >
          {item.value}
        </Styled.PaginationItem>
      ))}
    </Styled.Pagination>
  );
};

export default Pagination;
