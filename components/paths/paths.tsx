import React from 'react'
import { useSelector } from 'react-redux'
import Path from './path/path'

const Paths = () => {
    const {paths} = useSelector( state => state.appState)
  return (
    <div>
        {paths.map( (path, index) => <Path key={index} path={path}/>)}
    </div>
  )
}

export default Paths