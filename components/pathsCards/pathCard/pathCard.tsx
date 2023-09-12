import Link from 'next/link';
import React from 'react'
import { FaHeart } from "react-icons/fa";

const PathCard = ({path}) => {
  return (
    <Link href={'/path/'+path.url}>
      <div className='w-72 h-44 shadow-md hover:shadow-xl p-2 justify-center rounded-lg cursor-pointer'>
        <strong>{path.title}</strong>
        <br />
        <p className='line-clamp-3'>{path.intro}</p>
        <div className='flex flex-row gap-2'>
          <FaHeart className={`${path.like>0?'text-red-500':'text-gray-600 opacity-30'}`}/>
          <p>{path.like}</p>
        </div>
      </div>
    </Link>
  )
}

export default PathCard