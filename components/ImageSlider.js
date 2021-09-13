import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import * as RiIcons from 'react-icons/ri';
import { sliderImages } from './SliderData';

const slider = css`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  button {
    background: black;
    border: none;
    cursor: pointer;
  }

  .leftArrow {
    position: absolute;
    bottom: 5px;
    right: 40px;
  }

  .rightArrow {
    position: absolute;
    bottom: 5px;
    right: 0px;
  }
`;

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const length = sliderImages.length;

  const previousSlide = () => {
    setCurrentSlide(currentSlide === length ? 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length ? 1 : currentSlide + 1);
  };

  console.log(currentSlide);
  console.log(length);

  return (
    <section css={slider}>
      {sliderImages.map((slide) => {
        return (
          <div
            className={slide.id === currentSlide ? 'slideActive' : 'slide'}
            key={slide.id}
          >
            {slide.id === currentSlide && (
              <Image
                width="375px"
                height="360px"
                src={slide.src}
                alt="Room furniture"
                className="image"
              />
            )}
          </div>
        );
      })}
      <button className="leftArrow" onClick={previousSlide}>
        <RiIcons.RiArrowLeftSLine color="white" size={40} />
      </button>
      <button className="rightArrow" onClick={nextSlide}>
        <RiIcons.RiArrowRightSLine color="white" size={40} />
      </button>
    </section>
  );
}

export default ImageSlider;
