import React, { useState ,FormEvent} from 'react'
import TitleInput from './titleInput/titleInput'
import TagsInput from './tagsInput/tagsInput'
import TextInput from './textInput/TextInput'
import {toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Preview from './preview/preview';
import _ from 'lodash';

const NewpathForm = () => {
    const {path} = useSelector( state => state.appState)

    const submitHandler = (event:FormEvent) =>{
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default form submission behavior
          }
        console.log('form',path);
        if(_.isEmpty(path.title)){
            document.querySelector<HTMLInputElement>('#inputTitle')?.focus()
            return toast.error(`Please add a title`, {position: toast.POSITION.TOP_RIGHT})
        }
        if(path.length > 5000 || path.length < 300){
            return toast.error(`The text length must be between 300-5000 characters`, {position: toast.POSITION.TOP_RIGHT})
        }
        if(path.tags.length === 0){
            document.querySelector<HTMLInputElement>('#inputTag')?.focus()
            return toast.error(`Please add a tag.`, {position: toast.POSITION.TOP_RIGHT})
        }
    }

  return (
    <div>
        <div className='bg-white rounded-xl p-2 md:p-4 flex flex-col justify-center'>
            <TitleInput/>
            <TextInput/>
            {path.length >= 300 && <TagsInput/>}
            <p className={`${path.length < 300|| path.length>5000?'text-red-600':'text-green-500'}`}>
                {path.length}/300-5000
            </p>
            <button onClick={submitHandler} className='primaryBtn  mx-auto'>
                Publish
            </button>
        </div>
        <Preview/>
    </div>
  )
}

export default NewpathForm