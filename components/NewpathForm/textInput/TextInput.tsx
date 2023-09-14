import React, { useEffect, useRef, useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import dynamic from "next/dynamic";
import { log } from 'console';

const ReactQuill = dynamic(import('react-quill'), { ssr: false ,
    loading: () => <p>Loading ...</p>,})

const QuillEditor = ({  register,error,watch,setValue, getValues}) => {

  const modules = {
    toolbar: {
      container: [
            [{ 'header': '1' }, { 'header': '2' }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic'],
            [{ 'align': [] }],
            ['link'],
            ["blockquote", "code-block"],
            // ["image"],
          ],
        },
      };
      const formats = [
        'header', 'list', 'bold', 'italic', 'align', 'link', 'blockquote','code-block' 
      ];      

      const onEditorStateChange = (html: string, delta: any, source: any, editor: { getText(): () => string }) => {
        const text = editor.getText()
        console.log(getValues().text);
        // console.log('text length watch', watch('text').length);
        // console.log(watch('text').length > 10);
        
        setValue("html",html)
        setValue("text",text)        

      };
      useEffect(()=>{
        register("html", {     
            required:'Body is required',     
          // pattern:{
          //   value: /^.{300,10000}$/,
          //   message:'Body must be 300-10000 character'
          // },
          validate:{
            minMax: () =>{
              return(
                getValues().text.length > 10 ||
                `Body must be 300-10000 character`)
              },
            }
        })
      },[register,watch])
      const editorContent = watch('html');

  return (
    <div className="w-full  mx-auto my-2">
      <div onDrop={(e) => e.preventDefault()} className="relative w-full min-w-[200px] text-lg">
          <ReactQuill
    options="options"
    ready="onQuillReady"

            className='quill'
            modules={modules}
            formats={formats}
            theme="bubble"
            placeholder="Write your path here step by step..."

            value={editorContent}
            onChange={onEditorStateChange}
          />
      </div>
      <p className="text-red-600">{error}</p>

      {/* <p className={`${watch('text').length < 300|| watch('text').length > 10000?'text-red-600':'text-green-500'}`}>
                {watch('text').length}/300-10000
            </p> */}
    </div>
  )
}

export default QuillEditor