import React, { useState ,FormEvent} from 'react'
import TitleInput from './titleInput/titleInput'
import TagsInput from './tagsInput/tagsInput'
import TextInput from './textInput/TextInput'
import {toast } from 'react-toastify';

const Form = () => {
    const [richTextValue, setRichTextValue] = useState<JSX.Element>();
    const [length, setLength] = useState(1);
    const limit = 200
    const submitHandler = (event:FormEvent) =>{
        event.preventDefault()
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(richTextValue);
        if(length > limit){
            return toast.error(`The text length must not be more than ${limit} characters`, {position: toast.POSITION.TOP_RIGHT})
        }
    }
    const handleRichTextChange = ({html, length}:{html:JSX.Element,length:number}) => {
        setRichTextValue(html);
        setLength(length)


      };
  return (
    <form onSubmit={submitHandler} className='bg-white rounded-xl p-2 md:p-4 flex flex-col justify-center'>
        <div className='w-full flex wrap gap-4  '>
            <TitleInput/>
            <TagsInput/>
        </div>
        <TextInput onRichTextChange={handleRichTextChange}/>

        <button type="submit" className='primaryBtn  mx-auto'>
            Publish
        </button>
    </form>
  )
}

export default Form