import { pathReducer } from '@/redux/appStateSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TitleInput = () => {
  const {path} = useSelector((state:any) => state.appState)
  const dispatch = useDispatch()

  const inputChangeHandler = (event) =>{
    const newTitle = event.target.value
    dispatch(pathReducer({title:newTitle}))
  }
  return (
    <div className="w-full mx-auto my-2">
        <input
          id='inputTitle'
          className="w-full  text-2xl font-bold outline outline-0 transition-all border-none   focus:outline-0 "
          placeholder="Write a title here..."
          onInput={inputChangeHandler}
          autoFocus={true}
        />
    </div>
  )
}

export default TitleInput