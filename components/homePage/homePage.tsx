import React from 'react'
import Profile from './profile/profile'
import PathsCards from '../pathsCards/pathsCards'

const HomePage = ({paths}) => {
  return (
    <div>
      <Profile/>
      <PathsCards paths={paths}/>
    </div>
  )
}

export default HomePage