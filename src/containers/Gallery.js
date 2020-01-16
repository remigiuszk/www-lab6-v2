import './Gallery.css';
import {product, temp, products} from '../components/products'
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'back1.jpg',
    altText: 'Horizon Zero Dawn',
    caption: 'Horizon Zero Dawn'
  },
  {
    src: 'back2.jpg',
    altText: 'Bloodborne',
    caption: 'Bloodborne'
  },
  {
    src: 'back3.jpg',
    altText: 'God Of War',
    caption: 'God of War'
  },
  {
    src: 'back4.jpg',
    altText: 'Sekiro',
    caption: 'Sekiro'
  },
  {
    src: 'back5.jpg',
    altText: 'Wiedzmin 3',
    caption: 'Wiedzmin 3'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img height="550px" width="1200px" src={require("../assets/images/" + item.src)} alt={item.altText} />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;