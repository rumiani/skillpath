import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Links from './links/links'
import MenuIcon from './menuIcon/menuIcon'

const Navbar = () => {
  const[mobileMenu, setMobileMenu] = useState(false)

  const navbar=useRef<HTMLDivElement>(null)
  useEffect(() =>{
    onclick = (e)=>{
      if(mobileMenu && !navbar.current!.contains(e.target as Node)){
        setMobileMenu(false)
      }
    }
  },[mobileMenu])
  return (
    <div ref={navbar} className='bg-blue-500 flex justify-between align-top my-2 mx-auto px-5 py-4 rounded-3xl'>
          <Link href='/' className="text-white block font-bold text-xl self-start">SkillPath</Link>
        <div className={`${mobileMenu?'flex':'hidden'} transition-all duration-1000 md:flex mx-8 flex-grow md:flex-grow-0 md:w-fit flex items-end justify-end flex-col md:flex-row mt-10 md:m-0`}>
            <Links setMobileMenu={()=> setMobileMenu(false)}/>
        </div>
        <MenuIcon toggleMobileMenu={()=> setMobileMenu(!mobileMenu)} mobileMenu={mobileMenu}/>
    </div>
  )
}

export default Navbar