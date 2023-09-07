import { pathReducer } from '@/redux/appStateSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Tag = ({tag, key}) => {
    const {path} = useSelector((state:any) => state.appState)
    const dispatch = useDispatch()

    const removeTagHandler = (tag:string) =>{
        const filteredTags = path.tags.filter( (eachTag:string) => eachTag !== tag)
        dispatch(pathReducer({tags:filteredTags}))
    }
  return (
    <div key={key} className='relative bg-blue-200 w-fit rounded-md p-1 m-1'>
        <span className='pr-6 break-words'>{tag}</span>
        <span className='ml-1 cursor-pointer text-red-500 hover:font-bold absolute right-1 hover:bg-blue-400 transition-colors duration-300 rounded-full w-5 h-5 text-center ' title='remove'
            onClick={()=>removeTagHandler(tag)}>
            x
        </span>
    </div>
  )
}

export default Tag