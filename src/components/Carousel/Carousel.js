import React, { useState, useEffect } from 'react';
import {
  CarouselItemContainer,
  CarouselInner,
  CarouselContainer,
  CarouselIndicator,
  CarouselBtn,
  ArrowBtnBack,
  ArrowBtnForward,
} from './styles';

export const CarouselItem = ({ children, width }) => {
  return (
    <CarouselItemContainer style={{ width }}>{children}</CarouselItemContainer>
  );
};

export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);

    return () => {
      if (interval) clearInterval(interval);
    };
  });

  return (
    <CarouselContainer>
      <CarouselInner
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { width: '100%' })
        )}
      </CarouselInner>

      <CarouselIndicator>
        <CarouselBtn
          startIcon={<ArrowBtnBack />}
          onClick={() => updateIndex(activeIndex - 1)}
        />

        <CarouselBtn
          startIcon={<ArrowBtnForward />}
          onClick={() => updateIndex(activeIndex + 1)}
        />
      </CarouselIndicator>
    </CarouselContainer>
  );
};

export default Carousel;
