import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ProgressiveImage from 'react-progressive-image';
import './PhotoCarousel.css';

function PhotoCarousel({ images, checked }) {
  return (
    <Carousel
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={checked}
      stopOnHover={!checked}
      showThumbs={false}
    >
      {images.map((photo, index) => (
        <div key={index} style={{ height: '400px' }}>
          <ProgressiveImage
            delay={3000}
            src={photo.normalImage}
            placeholder={photo.smallImage}
          >
            {src => <img alt="" src={src}></img>}
          </ProgressiveImage>
        </div>
      ))}
    </Carousel>
  );
}

export default PhotoCarousel;
