import React from 'react'
import Navbar from './navbar/navbar'

const Header = () => {
  return (
    <div className='z-50 mx-auto px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 max-w-screen-lg'>
      <Navbar/>
    </div>
  )
}

export default Header