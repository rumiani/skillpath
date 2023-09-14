import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const Confirmation = ({msg,confirmationHandler,showModal}) => {
  const dialogModal = useRef(null)
  useEffect(()=>{
    showModal?
    dialogModal.current!.showModal():
    dialogModal.current!.close()
  },[showModal])
  return (
        <dialog ref={dialogModal}
        className='rounded-lg p-4' >
            <div>
                <p className='my-4'>
                  {msg}
                </p>
                <div className='flex flex-row gap-8 justify-end'>
                <button 
                  onClick={()=> {
                    confirmationHandler(false)
                    dialogModal.current?.close()
                  }}
                className='w-18 border-2 hover:border-gray-500 py-1 px-2 rounded-md'
                >Cancel</button>
                <button 
                  className='w-18 border-2 hover:border-red-500 hover:text-red-500 py-1 px-2 rounded-md'
                  onClick={()=> {
                    confirmationHandler(true)
                    dialogModal.current?.close()
                  }}>Confirm</button>
                </div>
            </div>
        </dialog>
  )
}

export default Confirmation