import _ from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux'
import PathMenu from './pathMenu/pathMenu'

const PathPage = () => {
    const{path} = useSelector(state => state.appState)
    
  return (
    <div className='p-2'>
      <div className='flex flex-wrap justify-between'>
        <strong>{_.capitalize(path.title)}</strong>
        <PathMenu/>
      </div>
        <br />
        <div className='break-words my-4'
          dangerouslySetInnerHTML={{__html: path.body}}
        ></div>
        <div>
        {path.tags.map( (tag,index) =>{
                        return <span className='bg-blue-200 p-1 rounded-md mx-1' key={index}>{tag}</span>
                    }
          )}
        </div>
    </div>
  )
}

export default PathPage