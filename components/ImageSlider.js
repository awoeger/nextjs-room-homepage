import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import { darkGray, lightGray } from '../styles/styles';
import { sliderImages } from './SliderData';

const slider = css`
  /* width: 100vw; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

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
    right: 50px;
    top: 193px;
  }

  .rightArrow {
    right: 0px;
    top: 193px;
  }

  #shopButton {
    border: none;
    text-transform: uppercase;
    background: white;
    color: ${darkGray};
    letter-spacing: 5px;
    font-size: 1.3em;
    margin: 20px 0px 20px 0;
    display: flex;
    align-items: center;
    padding: 0 25px;

    :hover,
    :active {
      color: ${lightGray};
    }

    span {
      margin-right: 20px;
    }
  }

  @media (min-width: 1000px) {
    .imageContainer {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      width: 100%;

      .heroText {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        #shopButton {
          position: absolute;
          bottom: 0px;
          left: 0px;
        }
      }
    }

    h1 {
      font-size: 1.5em;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 2em;
    }
  }

  @media (min-width: 1250px) {
    .imageContainer {
      .heroText {
        position: relative;

        #shopButton {
          position: absolute;
          bottom: 60px;
          left: 0px;
        }
      }
    }
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
          <div key={slide.id}>
            {slide.id === currentSlide && (
              <div className="imageContainer">
                <Image
                  width="840px"
                  height="534px"
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
                <div className="heroText">
                  <h1>{slide.heading}</h1>
                  <p>{slide.text}</p>
                  <button id="shopButton">
                    <span>Shop now</span>
                    <BsIcons.BsArrowRight size={30} />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ImageSlider;
