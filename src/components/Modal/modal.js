import React from 'react';
import { ModalContainer } from "./styles"

export const Modal = props => {
  const {modalRef, className, title, content } = props;

  return(
    <ModalContainer ref={modalRef} className={`${className} modal`}  title={title} content={content}>
      <h3>
       {title}
      </h3>
      <p>
        {content}
      </p>

    </ModalContainer>
  )
}

export default Modal