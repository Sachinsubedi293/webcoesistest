import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ImageSlider = ({ data }) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 400 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  if (!data || data.length === 0) {
    return null; 
  }

  return (
    <Carousel responsive={responsive}className='resp'>
      {data.map((res, index) => (
        <div key={index}>
          <div className="card px-10">
            <div className="rectangle">
              <div className="cardtop" />
              <div className="circleav">
                <img src={res.image} alt="image" />
              </div>
              <h2 className="blue">{res.name}</h2>
              <h6 className="text-yellow-500 prizetext">{res.spec}</h6>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
