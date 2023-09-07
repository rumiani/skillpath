import React, { useEffect, useRef, useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from 'react-redux';
import { pathReducer } from '@/redux/appStateSlice';

const ReactQuill = dynamic(import('react-quill'), { ssr: false ,
    loading: () => <p>Loading ...</p>,})


const TextInput = () => {
  const {path} = useSelector((state:any) => state.appState)
  const dispatch = useDispatch()

    const modules = {
        toolbar: [
          [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['bold', 'italic', 'underline'],
          [{ 'align': [] }],
          ['link'],
          ['clean'],
          ["blockquote", "code-block"],
          ["image"],
        ],
      };

      const formats = [
        'header', 'font', 'list', 'bold', 'italic', 'underline', 'align', 'link', 'blockquote','code-block', 'image'
      ];

      const handleEditorChange = (html: any, delta: any, source: any, editor: { getLength: () => number; }) => {
        const length:number = editor.getLength()
        dispatch(pathReducer({body:html, length}))
      };

  return (
    <div className="w-full mx-auto my-2">
              <div className="relative w-full min-w-[200px]">
                  <ReactQuill
                  className='quill'
                    // className="p-2 peer min-h-[60px] h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    // value={editorHtml} 
                    onChange={handleEditorChange} 
                    modules={modules}
                    formats={formats}
                    theme="snow"
                    placeholder=""
                      />
                  <p className={`${path.length < 300|| path.length>5000?'text-red-600':'text-black'}`}>
                    {path.length}/300-5000
                  </p>
              </div>
            </div>
  )
}

export default TextInput