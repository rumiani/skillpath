import React from 'react'
import GoogleLoginComp from './googleLogin/googleLogin';

function LoginComponent() {

  return (
    <div className="relative max-w-5xl text-center animate-fallDown w-screen h-screen">
          <GoogleLoginComp/>
    </div>
  )
}

export default LoginComponent