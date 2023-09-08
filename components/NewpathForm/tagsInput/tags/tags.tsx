import { pathReducer } from '@/redux/appStateSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tag from './tag/tag'

const Tags = () => {
    const {path} = useSelector((state:any) => state.appState)
    
  return (
    <div className='flex flex-wrap justify-center mx-auto w-full'>
        {path.tags.map( (tag:string, index:string) => {
            return (
                <Tag key={index} tag={tag}/>
            )
        })}
    </div>
  )
}

export default Tags