import Image from 'next/image';
import { sliderImages } from './SliderData';

function ImageSlider() {
  return (
    <>
      {sliderImages.map((slide) => {
        return (
          <div key={slide.id}>
            <Image
              width="375px"
              height="360px"
              src={slide.src}
              alt="Room furniture"
            />
          </div>
        );
      })}
    </>
  );
}

export default ImageSlider;
