import { css } from '@emotion/react';
import Image from 'next/image';
import * as BsIcons from 'react-icons/bs';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import { darkGray, lightGray } from '../styles/styles';

const shopButton = css`
  border: none;
  text-transform: uppercase;
  background: white;
  color: ${darkGray};
  letter-spacing: 5px;
  font-size: 1.3em;
  margin: 30px 0px;
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
`;

const lightDarkSection = css`
  h2 {
    text-transform: uppercase;
    padding-left: 25px;
    margin-top: 40px;
    font-size: 1em;
    letter-spacing: 3px;
  }

  p {
    margin-bottom: 40px;
  }
`;

export default function Home() {
  return (
    <div>
      <Header />
      <ImageSlider />
      <section>
        <button css={shopButton}>
          <span>Shop now</span>
          <BsIcons.BsArrowRight size={30} />
        </button>
      </section>
      <section css={lightDarkSection}>
        <Image
          src="/../public/images/desktop/image-about-dark.jpg"
          width="420px"
          height="266px"
          alt="dark chairs and a brown table"
        />
        <h2>About our furniture</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual tase. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
        <Image
          src="/../public/images/desktop/image-about-light.jpg"
          width="420px"
          height="266px"
          alt="White chair in a white room"
        />
      </section>
    </div>
  );
}
