import { css } from '@emotion/react';
import Image from 'next/image';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';

const lightDarkSection = css`
  display: flex;
  flex-direction: column;

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

  @media (min-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      text-align: center;
    }

    h2 {
      text-align: center;
    }
  }

  @media (min-width: 840px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    #a {
      order: 1;
    }
    #b {
      order: 3;
      width: 50%;
    }
    #c {
      order: 2;
    }
  }

  @media (min-width: 1300px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    #a {
      order: 1;
    }
    #b {
      order: 2;
    }
    #c {
      order: 3;
    }
  }
`;

export default function Home() {
  return (
    <div>
      <Header />
      <ImageSlider />
      <section css={lightDarkSection}>
        <Image
          src="/../public/images/desktop/image-about-dark.jpg"
          width="420px"
          height="266px"
          alt="dark chairs and a brown table"
          id="a"
        />
        <div id="b">
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual tase. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <Image
          src="/../public/images/desktop/image-about-light.jpg"
          width="420px"
          height="266px"
          alt="White chair in a white room"
          id="c"
        />
      </section>
    </div>
  );
}
