import Link from 'next/link'
import React from 'react'

const SentComponent = ({path, newPathHandler}) => {
  return (
    <div>
        <div className='p-24 flex flex-row gap-8 items-center'>
                <button className='text-blue-400 text-lg'>
                    <Link href={'path/'+path.url || '/'} className='underline'>
                        See the created path
                    </Link>
                </button>
            <button className='primaryBtn'
                onClick={newPathHandler}>
                New Path
            </button>
        </div>
    </div>
  )
}

export default SentComponent