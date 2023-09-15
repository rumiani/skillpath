
import React from 'react'

const Tag = ({tag, removeTagHandler}) => {

  return (
    <div className='-z-1 relative bg-blue-200 w-fit rounded-md p-1 m-1'>
        <span className='pr-6 break-words'>{tag}</span>
        <span className='ml-1 cursor-pointer text-red-500 hover:font-bold absolute right-1 rounded-full w-5 h-5 text-center ' title='remove'
            onClick={()=>removeTagHandler(tag)}>
            x
        </span>
    </div>
  )
}

export default Tag