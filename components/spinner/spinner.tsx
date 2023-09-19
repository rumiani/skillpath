import React from 'react'

const Spinner = ({size}:{size:number}) => {
    return (
    <div  style={{width:size+'px', height:size+'px'}}
    className='border-t-10 self-center  border-gray-300 border-2 border-t-blue-500 border-solid rounded-full animate-spin'> 
    </div>
  )
}

export default Spinner