import React, { ReactNode } from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import { ToastContainer } from 'react-toastify';

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='relative min-h-screen mx-auto max-w-screen-2xl'>
      <Header/>
        <ToastContainer limit={3}/>
        <main className='pt-20 px-4 sm:px-6 mx-auto lg:px-8 w-full max-w-screen-lg min-h-screen break-words'>
            {children}
        </main>
      <Footer/>
    </div>
  )
}

export default Layout