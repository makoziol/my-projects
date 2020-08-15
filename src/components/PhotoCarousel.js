import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function PhotoCarousel({ images }) {
  return (
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
      {images.map((photo, index) => (
        <img alt="" key={index} src={photo}></img>
      ))}
    </Carousel>
  );
}

export default PhotoCarousel;
