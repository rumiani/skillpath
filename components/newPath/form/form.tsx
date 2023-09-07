import React, { useState ,FormEvent} from 'react'
import TitleInput from './titleInput/titleInput'
import TagsInput from './tagsInput/tagsInput'
import TextInput from './textInput/TextInput'
import {toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Form = () => {
    const {path} = useSelector( state => state.appState)

    const submitHandler = (event:FormEvent) =>{
        event.preventDefault()
        console.log(path);
        
        if(path.length > 5000 || path.length < 300){
            return toast.error(`The text length must be between 300-5000 characters`, {position: toast.POSITION.TOP_RIGHT})
        }
    }

  return (
    <form onSubmit={submitHandler} className='bg-white rounded-xl p-2 md:p-4 flex flex-col justify-center'>
        <TitleInput/>
        <TextInput/>
        {path.length >= 300 && <TagsInput/>}

        <button type="submit" className='primaryBtn  mx-auto'>
            Publish
        </button>
    </form>
  )
}

export default Form