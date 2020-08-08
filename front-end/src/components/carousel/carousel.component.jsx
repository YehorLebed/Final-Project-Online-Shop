import React, { useState } from 'react';
import { URL } from '../../services/shopServices';

import './corousel.styles.css';

const Carousel = ({ images }) => {
  const [indexActive, setIndexActive] = useState(0);
  // const [fileImagesURL, setFileImagesURL] = useState();

  // if (images) {
  //   const data = images.map((image, idx) => {
  //     if (!image.filename && !image.originalname)
  //       return { image, idx }
  //   });
  //   const files = data.filter(v => v);

  //   Promise.all(files.map((file, idx) => new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.addEventListener('load', (ev) => resolve({ url: ev.target.result, idx }));
  //     reader.addEventListener('error', reject);
  //     reader.readAsDataURL(file);
  //   }))).then(res => setFileImagesURL(res));
  // }

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
          images.map((i, index) => (
            <div key={i.filename || i.name} className={`carousel-item ${index === indexActive && "active"}`}>
              <img src={(i.filename && `${URL}/images/${i.filename}`) || i.url} className="d-block w-100" alt={i.originalname || i.name} />
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