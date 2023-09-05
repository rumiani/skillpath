import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const UserLink  = ({closeMobileMenu}:{closeMobileMenu:Function}) => {
  const[userMenu,setUserMenu] = useState(false)
  const[loggedIn, setLoggedIn] = useState(true)
  const userMenuElement=useRef<HTMLDivElement>(null)

  useEffect(() =>{
    onclick = (e:any)=>{
      if(userMenu && !userMenuElement.current!.contains(e.target)){
        setUserMenu(false)
      }
    }
  },[userMenu, closeMobileMenu])

  const userMenuHandler = () =>{
    closeMobileMenu()
    setUserMenu(false)
  }

  return (
    <div className='cursor-pointer w-40 md:w-fit md:mx-4 flex justify-end text-end text-lg px-8 md:p-0 my-3 md:m-0 '>
    {loggedIn? 
      <div ref={userMenuElement} className=' relative w-8 h-8 rounded-full flex md:justify-ce nter'>
        {userMenu && 
          <div  onClick={userMenuHandler} className='absolute bg-opacity-90  bg-blue-500 rounded-lg w-32 right-10 top-2 p-2 pl-4 md:top-14 md:-right-10 flex flex-col shadow-gray-50 shadow-sm'>
              <Link href={'/member'} className='text-gray-300 hover:text-white transition-transform duration-300'>Profile</Link>
              <Link href={'/login'} className='text-red-700 hover:text-red-500'>Log out</Link>
          </div>
        }
        <div onClick={() => setUserMenu(!userMenu)} className=''>
            <Image width={32} height={32} src='/assets/images/avatar.png' alt='profile'/>
        </div>
    </div>
        : 
        <Link href='/login'>Log in</Link>
      }
    </div>
  )
}

export default UserLink