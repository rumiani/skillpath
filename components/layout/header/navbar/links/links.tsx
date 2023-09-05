import Link from 'next/link'
import React from 'react'
import UserLink from './userLink/userLink'
const navLinks = [
    {name:'Home',link:'/'},
    {name:'Posts',link:'/posts'},
    {name:'Contact',link:'/contact'},
    {name:'FAQ',link:'/faq'},
  ]
const Links = ({setMobileMenu}:{setMobileMenu:any}) => {
  return (
    <>
        {navLinks.map( link =>{
                return <Link className='nav_link' onClick={setMobileMenu} key={link.link} href={link.link}>{link.name}</Link>
        })}
        <UserLink closeMobileMenu={setMobileMenu}/>
    </>
  )
}

export default Links