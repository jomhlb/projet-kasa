import { useState } from 'react';
import './index.scss';

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="picture-slideshow"
      />

      {pictures.length > 1 && (
        <>
          <button onClick={prevSlide} className="button-left">
            <img
              src="/chevronleft.png"
              alt="Précédent"
              className="chevron-icon-left"
            />
          </button>

          <button onClick={nextSlide} className="button-right">
            <img
              src="/chevronright.png"
              alt="Suivant"
              className="chevron-icon-right"
            />
          </button>

          <div className="button-number">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}
