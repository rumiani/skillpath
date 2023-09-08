import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import _ from 'lodash'
import he from 'he';

const Preview = () => {
    const {path} = useSelector(state => state.appState)
    const dialogElement = useRef(null);
    const showModalHnadler = () => {
      dialogElement.current!.showModal();
    };
    console.log(path.body);
    useEffect(() =>{
        
        onclick = (event) => {
            if (event.target === dialogElement.current || event.target.id === 'close')
            dialogElement.current!.close();
        };
    },[])

  return (
    <div>
        <button onClick={showModalHnadler} 
         style={{background:'green'}} className='primaryBtn  mx-auto'>
            Preview
        </button>
        <dialog  ref={dialogElement} className='rounded-lg p-2 sm:p-4'>
            <h2 className='font-bold text-gray-500'>Preview</h2>
            <div className='quill my-4 p-4 '>
                <h1 className='text-center font-bold text-2xl my-4' >
                    {_.capitalize(path.title)}
                </h1>
                <p className='font-semibold my-4'>
                    {path.intro}
                </p>
                <div className='text-base'
                    dangerouslySetInnerHTML={{__html: he.decode(path.body)}}>
                </div> 
                <div className='my-4'>
                    {path.tags.length > 0 && 'Tags:' }<br />
                    {path.tags.map( (tag,index) =>{
                        return <span className='bg-blue-200 p-1 rounded-md mx-1' key={index}>{tag}</span>
                    })}
                </div>
                <button id='close' className='primaryBtn'>Back</button>
            </div>
        </dialog>
    </div>
  )
}

export default Preview