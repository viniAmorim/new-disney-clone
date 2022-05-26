import React, { BaseHTMLAttributes } from 'react';

import * as Styled from './styles';

export interface MovieCardProps extends BaseHTMLAttributes<HTMLDivElement> {
  /**
   * MovieCard Image
   */
  src: string;
}

const MovieCard = ({ src, ...rest }: MovieCardProps) => {
  return (
    <Styled.MovieCard {...rest}>
      <Styled.MovieCardImage src={src} />
    </Styled.MovieCard>
  );
};

export default MovieCard;
