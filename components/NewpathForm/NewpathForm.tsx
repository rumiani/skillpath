import React, { useState ,FormEvent, useRef, useEffect} from 'react'
import TitleInput from './titleInput/titleInput'
import TagsInput from './tagsInput/tagsInput'
import TextInput from './textInput/TextInput'
import {toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Preview from './preview/preview';
import _ from 'lodash';
import { createPath } from '@/actions/paths';
import Link from 'next/link';

const NewpathForm = () => {
    const {path} = useSelector( state => state.appState)
    const dispatch = useDispatch()
    const dialogElement = useRef()
    const[sending, setSending] = useState(false)
    const submitHandler = async (event:FormEvent) =>{
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default form submission behavior
          }

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
        // console.log(path);
        dialogElement.current.showModal()
        dispatch(createPath(path))

        // console.log();
        // dispatch(pathReducer({title: '', body:'', length:1, url, tags:[],}))        
    }
useEffect(() =>{
    onclick = (event) => {
        if (event.target === dialogElement.current)
        dialogElement.current!.close();
    }
},[])
  return (
    <div>
        <div className='bg-white rounded-xl p-2 md:p-4 flex flex-col justify-center'>
            <TitleInput/>
            <TextInput/>
            {path.length >= 300 && <TagsInput/>}
            <p className={`${path.length < 300|| path.length > 5001?'text-red-600':'text-green-500'}`}>
                {path.length -1}/300-5000
            </p>
            <button disabled={sending?true:false} onClick={submitHandler} className='primaryBtn  mx-auto'>
                Publish
            </button>
        </div>
        <dialog ref={dialogElement} className='p-24'>
            <Link href={'path/'+path.url || '/'} className='text-blue-400 underline'>
                See the path
                <p>{'path/'+path.url}</p>
                </Link>
            <button onClick={() => dialogElement.current.close()}>New Path</button>
        </dialog>
        <Preview/>
    </div>
  )
}

export default NewpathForm