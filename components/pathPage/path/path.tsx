import React from 'react'
const pathObj ={
                    body: "<p>asfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfasfd sfasd fsdfa fdsfa</p>",
                    length: 317,
                    src: "",
                    tags: [ "sdf","555" ],
                    title: "safdsasdf"
                }

const Path = () => {
  return (
    <div className='my-4'>
        <h1 className='text-center font-bold text-2xl my-4' >{pathObj.title}</h1>
        <div className='text-base'
         dangerouslySetInnerHTML={{__html: pathObj.body}}>
        </div> 
        <div className='my-4'>
            Tags: <br />
            {pathObj.tags.map( (tag,index) =>{
                return <span className='bg-blue-200 p-1 rounded-md mx-1' key={index}>{tag}</span>
            })}
        </div>
    </div>
  )
}

export default Path