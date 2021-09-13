import Image from 'next/image';
import * as RiIcons from 'react-icons/ri';
import ImageSlider from '../components/ImageSlider';

export default function Home() {

  const slideLeft = () => {};

  const slideRight = () => {};

  return (
    <div>
      <header>Logo and Burger Menu</header>
      <ImageSlider />
      <button onClick={slideLeft}>
        <RiIcons.RiArrowLeftSLine />
      </button>
      <button onClick={slideRight}>
        <RiIcons.RiArrowRightSLine />
      </button>
      <section>
        <h2>Discover innovative ways to decorate</h2>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button>Shop now</button>
      </section>

      <section></section>

      <section>
        <h3>About our furniture</h3>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspries you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialsts are available to help you create your
          dream space.
        </p>
      </section>
    </div>
  );
}
