import _ from 'lodash'
import React from 'react'

const TitleInput = ({register, error}) => {

  return (
    <div className="w-full mx-auto my-2">
        <input
          id='inputTitle'
          className="w-full p-1 focus:bg-gray-100 text-2xl font-bold outline outline-0 transition-all border-none   focus:outline-0 "
          placeholder="Write a title here..."
          autoComplete="off"
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
              // myEmailValidate: async (fieldValue:string) =>{
              //   fieldValue = _.capitalize(fieldValue)
              //   const res = await fetch(
              //     `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
              //     );
              //     const data = await res.json()
              //     return data.length === 0 || 'Email already exists.'
              //   }
            }
          })}
        />
        <p className='text-red-500 text-sm pl-4'>{error}</p>
    </div>
  )
}

export default TitleInput