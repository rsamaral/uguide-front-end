import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';

export const CarouselContainer = styled.div`
  overflow: hidden;
`;

export const CarouselInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

export const CarouselItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
`;

export const CarouselIndicator = styled.div`
  display: flex;
  justify-content: center;
`;

export const CarouselBtn = styled(Button)`
  margin: 5px;
`;

export const ArrowBtnBack = styled(ArrowBack)`
  color: black;
  outline: none;
  text-decoration: none;
`;

export const ArrowBtnForward = styled(ArrowForward)`
  color: black;
  outline: none;
  text-decoration: none;
`;
