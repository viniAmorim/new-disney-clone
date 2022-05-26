import React, { BaseHTMLAttributes } from 'react';

import * as Styled from './styles';

export interface CategoryCardProps extends BaseHTMLAttributes<HTMLDivElement> {
  /**
   * CategoryCard Image
   */
  src: string;
}

const CategoryCard = ({ src, ...rest }: CategoryCardProps) => {
  return (
    <Styled.CategoryCard {...rest}>
      <Styled.CategoryCardImage src={src} />
    </Styled.CategoryCard>
  );
};

export default CategoryCard;
