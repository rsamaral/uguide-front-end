import React, {useState} from "react";
import { useEffect } from "react";
import {CarrosselItemContainer, CarrosselInner, CarrosselContainer, CarrosselIndicator, CarrosselBtn, ArrowBtnBack, ArrowBtnForward } from "./styles";


export const CarrosselItem = ({ children, width }) => {
  return(
    <CarrosselItemContainer style={{width: width}}>
      {children}
    </CarrosselItemContainer>
  )
}

export const Carrossel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if(newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if(newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);

    return () => {
      if(intervalo) {
        clearInterval(intervalo);
      }
    }
  })

  return(
    <CarrosselContainer>
      <CarrosselInner style={{transform: `translatex(-${activeIndex * 100}%)`}}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {width: "100%" });
        })}
      </CarrosselInner>
      <CarrosselIndicator>
        <CarrosselBtn
          startIcon={<ArrowBtnBack />}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
        </CarrosselBtn> 
        <CarrosselBtn
          startIcon={<ArrowBtnForward />}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
        </CarrosselBtn> 
      </CarrosselIndicator>
    </CarrosselContainer>
  )
}

export default Carrossel;