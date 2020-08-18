import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ProgressiveImage from 'react-progressive-image';
import PhotoModal from './PhotoModal';
import './PhotoCarousel.css';

function PhotoCarousel({ images, checked }) {
  const [imageRef, setRef] = useState(images[0].normalImage);
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={checked}
        stopOnHover={!checked}
        showThumbs={false}
        onChange={index => setRef(images[index].normalImage)}
      >
        {images.map((photo, index) => (
          <div key={index} style={{ height: '80%' }}>
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
      <PhotoModal image={imageRef} />
    </div>
  );
}

export default PhotoCarousel;
