import React from 'react'
import _ from 'lodash'
import { useSelector } from 'react-redux'
const path ={
                    body: "<p>asfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfa</p>",
                    length: 317,
                    src: "",
                    tags: [ "sdf","555" ],
                    title: "safdsasdf"
                }

const Path = () => {
  const{path} = useSelector(state => state.appState)
  console.log(path);
  
  return (
    <div className='my-4'>
        <h1 className='text-center font-bold text-2xl my-4' >
          {_.capitalize(path.title)}
        </h1>
        <div className='text-base w-full break-words'
         dangerouslySetInnerHTML={{__html: path.body}}>
        </div> 
        <div className='my-4'>
            Tags: <br />
            {path.tags.map( (tag,index) =>{
                return <span className='bg-blue-200 p-1 rounded-md mx-1' key={index}>{tag}</span>
            })}
        </div>
    </div>
  )
}

export default Path