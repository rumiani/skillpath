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
  const[editorValue, setEditorValue] = useState('')
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
        'header', 'font', 'list', 'bold', 'italic', 'underline', 'align', 'link', 'blockquote','code-block', 'image', 
      ];

      const handleEditorChange = (html: any, delta: any, source: any, editor: { getLength: () => number; }) => {

        const tempElement = document.createElement('div');
        tempElement.innerHTML = html;
        const imageElements = tempElement.querySelectorAll('img');
        
        // if(imageElements.length > 1) return alert('')

        setEditorValue(html)
        const length:number = editor.getLength()
        dispatch(pathReducer({body:html, length}))
      };

  return (
    <div className="w-full  mx-auto my-2">
              <div className="relative w-full min-w-[200px]">
                  <ReactQuill
                    className='quill'
                    onChange={handleEditorChange}
                    // value='editorValue'
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