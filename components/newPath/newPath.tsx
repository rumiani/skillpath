import React, { useEffect, useRef, useState } from 'react'
import Form from './form/form';

const NewPath = () => {
    const dialogElement = useRef(null);
    const showModalHnadler = () => dialogElement.current?.showModal();
    
    useEffect(() => {
        onclick = (event) => {
          if (event.target === dialogElement.current)
            dialogElement.current!.close();
        };
      }, []);

  return (
    <div>
        <button className="primaryBtn"
          onClick={showModalHnadler}>
            New Path
        </button>
        <dialog ref={dialogElement} className="bg-gray-50 bg-opacity-0 rounded-md w-full max-w-screen-md p-6">
          <Form/>
          </dialog>
    </div>
  )
}

export default NewPath