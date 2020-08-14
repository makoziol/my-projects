import React from 'react';
import { MOTORCYCLE_KITS_PHOTOS } from '../data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function PhotoCarousel() {
  return (
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
      {MOTORCYCLE_KITS_PHOTOS.map((photo, index) => (
        <img alt="" key={index} src={photo}></img>
      ))}
    </Carousel>
  );
}

export default PhotoCarousel;
