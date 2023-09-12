import React from 'react'
import { useSelector } from 'react-redux'
import PathCard from './pathCard/pathCard';


const PathsCards = ({paths}) => {
    // const {paths} = useSelector( state => state.appState)
  console.log(paths);
  
  return (
    <div className='flex flex-wrap gap-2 my-8'>
        {paths.map( (path, index) => <PathCard key={index} path={path}/>)}
    </div>
  )
}

export default PathsCards