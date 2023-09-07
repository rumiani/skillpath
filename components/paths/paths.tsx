import React from 'react'
import { useSelector } from 'react-redux'
import Path from './path/path'
import { pathObj } from './pathObj'
const Paths = () => {
    // const {paths} = useSelector( state => state.appState)

  return (
    <div className='flex flex-wrap gap-2 my-8'>
        {pathObj.map( (path, index) => <Path key={index} path={path}/>)}
    </div>
  )
}

export default Paths