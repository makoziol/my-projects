import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './PhotoCarousel.css';

function PhotoCarousel({ images, checked }) {
  return (
    <Carousel
      infiniteLoop
      useKeyboardArrows={true}
      autoPlay={checked}
      stopOnHover={true}
    >
      {images.map((photo, index) => (
        <img alt="" key={index} src={photo}></img>
      ))}
    </Carousel>
  );
}

export default PhotoCarousel;
