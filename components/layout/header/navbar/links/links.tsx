import Link from 'next/link'
import React from 'react'
import UserLink from './userLink/userLink'
const navLinks = [
    {name:'Home',link:'/'},
    {name:'Notes',link:'/notes'},
    {name:'Contact',link:'/contact'},
    {name:'FAQ',link:'/faq'},
  ]
const Links = ({setMobileMenu}:{setMobileMenu:any}) => {
  return (
    <>
        {navLinks.map( link =>{
                return <Link className='cursor-pointer w-40 md:w-fit md:mx-4 flex justify-end text-end text-lg px-8 md:p-0 my-3 md:m-0 text-gray-300 hover:text-white transition-transform duration-300' 
                  onClick={setMobileMenu} key={link.link} href={link.link}>{link.name}</Link>
        })}
        <UserLink closeMobileMenu={setMobileMenu}/>
    </>
  )
}

export default Links