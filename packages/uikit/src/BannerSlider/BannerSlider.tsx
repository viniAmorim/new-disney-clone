import React, { BaseHTMLAttributes } from 'react';

import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import * as Styled from './styles';

interface Item {
  link?: string;
  url: string;
}

export interface BannerSliderProps extends BaseHTMLAttributes<HTMLDivElement> {
  /**
   * Banner Slider items.
   */
  items?: Item[];
}

const BannerSlider = ({ items, ...rest }: BannerSliderProps) => {
  console.log(items);
  return (
    <CarouselProvider
      naturalSlideWidth={1256}
      naturalSlideHeight={400}
      totalSlides={3}
      {...rest}
    >
      <Styled.Slider>
        <Slider>
          {items?.map((tempItem, index) => (
            <Slide index={index} key={index}>
              <Image
                src={tempItem?.url}
                hasMasterSpinner={false}
                className={'image'}
              />
            </Slide>
          ))}
        </Slider>
      </Styled.Slider>

      <Styled.DotGroup>
        <DotGroup />
      </Styled.DotGroup>
    </CarouselProvider>
  );
};

export default BannerSlider;
