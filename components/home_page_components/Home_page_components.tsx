import React from 'react'
import Profile from './profile/profile'
import PathsCards from '../pathsCards/pathsCards'

const Home_page_components = ({paths}) => {
  return (
    <div>
      <Profile/>
      <PathsCards paths={paths}/>
    </div>
  )
}

export default Home_page_components