import _ from 'lodash'
import React from 'react'
import PathMenu from './pathMenu/pathMenu'

const Path_Page_Components = ({path}) => {
    
  return (
    <div className='path p-2'>
      <div className='flex flex-wrap justify-between'>
        <strong>{_.capitalize(path.title)}</strong>
        <PathMenu/>
      </div>
        <br />
        <div className='path break-words my-4'
          dangerouslySetInnerHTML={{__html: path.body}}
        ></div>
        <div>
        {path.tags.map( (tag:string,index:string) =>{
                        return <span className='bg-blue-200 p-1 rounded-md mx-1' key={index}>{tag}</span>
                    }
          )}
        </div>
    </div>
  )
}

export default Path_Page_Components