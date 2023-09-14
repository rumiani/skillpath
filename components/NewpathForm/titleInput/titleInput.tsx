import { pathReducer } from '@/redux/appStateSlice'
import _ from 'lodash'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const TitleInput = ({register, error}) => {

  const {path} = useSelector((state:any) => state.appState)
  const dispatch = useDispatch()

  const inputChangeHandler = (event) =>{
    const newTitle = event.target.value
    dispatch(pathReducer({title:newTitle}))
  }
  const titleInputControler = () =>{
            if(_.isEmpty(path.title)){
            document.querySelector<HTMLInputElement>('#inputTitle')?.focus()
            return toast.error(`Please add a title`, {position: toast.POSITION.TOP_RIGHT})
        }
  }
  return (
    <div className="w-full mx-auto my-2">
        <input
          id='inputTitle'
          className="w-full p-1 focus:bg-gray-100 text-2xl font-bold outline outline-0 transition-all border-none   focus:outline-0 "
          placeholder="Write a title here..."
          autocomplete="off"
          type='text'
          {...register('title',{
            required:'Title is required',
            pattern:{
              value: /^.{4,100}$/,
              message:'Title must be 4-100 character'
            },
            validate:{
              notAdmin: (fieldValue:string) =>{
                return(
                  fieldValue !== "admin" ||
                  'Enter a diffrent title'
                )
              },
              notRumi: (fieldValue:string) =>{
                return(
                  fieldValue !== "rumi" ||
                  'Rumi is not allowed as a title'
                )
              },
              myEmailValidate: async (fieldValue:string) =>{
                fieldValue = _.capitalize(fieldValue)
                const res = await fetch(
                  `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                  );
                  const data = await res.json()
                  return data.length === 0 || 'Email already exists.'
                }
            }
          })}
        />
        <p className='text-red-500 text-sm pl-4'>{error}</p>
    </div>
  )
}

export default TitleInput