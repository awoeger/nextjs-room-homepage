import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import * as RiIcons from 'react-icons/ri';
import { darkGray, lightGray } from '../styles/styles';
import { sliderImages } from './SliderData';

const slider = css`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .imageContainer {
    position: relative;
  }

  h1 {
    font-weight: 700;
    font-size: 2em;
    text-align: start;
    margin-top: 40px;
    color: ${darkGray};
  }

  p {
    text-align: start;
    color: ${lightGray};
  }

  button {
    background: black;
    border: none;
    cursor: pointer;
    position: absolute;

    :hover,
    :active {
      color: ${lightGray};
    }
  }

  .leftArrow {
    right: 40px;
    top: 314px;
  }

  .rightArrow {
    right: 0px;
    top: 314px;
  }
`;

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const length = sliderImages.length;

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 1 ? length : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length ? 1 : currentSlide + 1);
  };

  return (
    <section css={slider}>
      {sliderImages.map((slide) => {
        return (
          <div
            key={slide.id}
            // className={slide.id === currentSlide ? 'slideActive' : 'slide'}
          >
            {slide.id === currentSlide && (
              <div className="imageContainer">
                <Image
                  width="375px"
                  height="360px"
                  src={slide.src}
                  alt="Room furniture"
                  className="image"
                />
                <button className="leftArrow" onClick={previousSlide}>
                  <RiIcons.RiArrowLeftSLine color="white" size={40} />
                </button>
                <button className="rightArrow" onClick={nextSlide}>
                  <RiIcons.RiArrowRightSLine color="white" size={40} />
                </button>
                <h1>{slide.heading}</h1>
                <p>{slide.text}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ImageSlider;
