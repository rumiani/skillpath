import React, { FormEvent, useState } from 'react'
import Tags from './tags/tags'
import { useDispatch, useSelector } from 'react-redux'
import { pathReducer } from '@/redux/appStateSlice'
import { toast } from 'react-toastify'

const TagsInput = () => {
    const {path} = useSelector(state => state.appState)
    const dispatch = useDispatch()
    const[value,setValue] = useState('')
    
    const tagsStoreHandler = (e:FormEvent<HTMLInputElement>)=>{
        const str = e.target!.value.trim()
        const lastChar = str[str.length -1]
        setValue(str)
        
        if(lastChar === ','|| lastChar === '-' || e.key === 'Enter'){
            const newTag = (e.key === 'Enter') ? str:str.slice(0, -1)
            if(newTag.length > 10 || newTag.length < 5 ){
                return toast.error(`The tag length must be 5-10 characters`, {position: toast.POSITION.TOP_RIGHT, toastId: 'error1'},)
            }
            if(path.tags.length > 4){
                return toast.error(`Can not add more than 5 tags`, {position: toast.POSITION.TOP_RIGHT})
            }
            setValue('')
            dispatch(pathReducer({tags:[...path.tags, newTag]}))
        }
    }

  return (
    <div className='my-4'>
        <div className="flex flex-wrap w-full mx-auto my-2">
            <Tags/>
            <input
                id='inputTag'
                className="max-[100px] text-xl outline outline-0 transition-all border-none   focus:outline-0 "
                placeholder="Add a tag..."
                onChange={tagsStoreHandler}
                onKeyUp={tagsStoreHandler}
                type='text'
                value={value}
            />
        </div>
    </div>
  )
}

export default TagsInput