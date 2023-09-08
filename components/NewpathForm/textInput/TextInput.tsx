import React, { useEffect, useRef, useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

import dynamic from "next/dynamic";
import { useDispatch, useSelector } from 'react-redux';
import { pathReducer } from '@/redux/appStateSlice';
import { conterntWithRemovedImg } from './lastImgRemover';

const ReactQuill = dynamic(import('react-quill'), { ssr: false ,
    loading: () => <p>Loading ...</p>,})


const TextInput = () => {
  const {path} = useSelector((state:any) => state.appState)
  const dispatch = useDispatch()
  // const[editorValue, setEditorValue] = useState('')

    const modules = {
        toolbar: [
          [{ 'header': '1' }, { 'header': '2' }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['bold', 'italic'],
          [{ 'align': [] }],
          ['link'],
          ["blockquote", "code-block"],
          ["image"],
        ],
      };

      const formats = [
        'header', 'list', 'bold', 'italic', 'align', 'link', 'blockquote','code-block', 'image', 
      ];

      const handleEditorChange = (html: any, delta: any, source: any, editor: { getLength: () => number; }) => {
          const length:number = editor.getLength()          
          dispatch(pathReducer({body:conterntWithRemovedImg(editor,html), length}))
      };
      useEffect(()=>{
        const resizableImage = document.querySelector('img');
        resizableImage?.addEventListener( 'onmousedown', ()=>{
          console.log('got the img');
          
        })
      },[])
  return (
    <div className="w-full  mx-auto my-2">
      <div onDrop={(e) => e.preventDefault()} className="relative w-full min-w-[200px]">
          <ReactQuill
            className='quill'
            onChange={handleEditorChange}
            value={path.body}
            modules={modules}
            formats={formats}
            theme="bubble"
            placeholder="Write your path here step by step..."
          />
          <p className={`${path.length < 300|| path.length>5000?'text-red-600':'text-black'}`}>
            {path.length}/300-5000
          </p>
      </div>
    </div>
  )
}

export default TextInput