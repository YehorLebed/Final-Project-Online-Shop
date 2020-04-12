import React, { useState } from 'react';

import './corousel.styles.css';

const Carousel = ({ images }) => {

  const [indexActive, setIndexActive] = useState(0);

  function nextSlide() {
    indexActive !== images.length - 1
      ? setIndexActive(indexActive + 1)
      : setIndexActive(0);
  }

  function prevSlide() {
    indexActive !== 0
      ? setIndexActive(indexActive - 1)
      : setIndexActive(images.length - 1);
  }

  return (
    <div className="carousel slide" >
      <div className="carousel-inner">
        {
          images.map(({ filename, originalname }, index) => (
            <div key={filename} className={`carousel-item ${index === indexActive && "active"}`}>
              <img src={`http://localhost:4000/images/${filename}`} className="d-block w-100" alt={originalname} />
            </div>
          ))
        }
      </div>
      <a className="carousel-control-prev" role="button" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" role="button" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel;