import React from 'react'
import Navbar from './navbar/navbar'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const HeaderPosition = router.pathname === '/newpath'? '-mb-10':'fixed'
  
  return (
    <div className={`${HeaderPosition} z-50 mx-auto px-4 sm:px-6 lg:px-8 top-0 left-0 right-0 max-w-screen-lg`}>
      <Navbar/>
    </div>
  )
}

export default Header