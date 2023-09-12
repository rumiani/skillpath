import React from 'react'

const Path = ({path}) => {
    console.log(path);
  return (
    <div className='w-72 h-44 bg-red-300 p-2 justify-center rounded-lg cursor-pointer shadow-red-500 hover:shadow-lg'>
        <strong>{path.title}</strong>
        <br />
        <p className='line-clamp-6'>{path.body}</p>
    </div>
  )
}

export default Path