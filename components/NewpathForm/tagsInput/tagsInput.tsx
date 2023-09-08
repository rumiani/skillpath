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
        const str = e.target!.value
        setValue(str)
        if(str[str.length -1] === ','){
            const newTag = str.trim().slice(0, -1)
            if(newTag.length > 10 || newTag.length < 3 ){
                return toast.error(`The tag length must be 3-10 characters`, {position: toast.POSITION.TOP_RIGHT})
            }
            if(path.tags.length > 3){
                return toast.error(`Can not add more than 3 tags`, {position: toast.POSITION.TOP_RIGHT})
            }
            setValue('')
            dispatch(pathReducer({tags:[...path.tags, newTag]}))
        }
    }

  return (
    <div>
        <div className="max-w-[200px] w-full sm:w-1/2 mx-auto mb-2">
            <div className="relative h-10 w-full">
                <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=""
                    type='text'
                    value={value}
                    onChange={tagsStoreHandler}
                    />
                <label className="before:content[' '] opacity-40 peer-focus:opacity-100 after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Tags
                </label>
            </div>
        </div>
        <Tags/>
    </div>
  )
}

export default TagsInput