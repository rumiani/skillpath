import React from 'react'

const MenuIcon = ({toggleMobileMenu, mobileMenu}:{toggleMobileMenu:any, mobileMenu:boolean}) => {
  return (
      <div onClick={toggleMobileMenu} className='md:hidden cursor-pointer text-xl self-start text-white'>
              {mobileMenu ? '\u2715' : '\u2630' }
      </div>
  )
}

export default MenuIcon