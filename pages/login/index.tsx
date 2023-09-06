import GoogleLoginComp from '@/components/loginComponent/googleLogin/googleLogin'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" /> 
        <title>Skillpath</title>
        <meta name="author" content="Maziar Rumiani" />
        <meta name="keywords" content="skill, skillpath" />
        <meta name="description" content="Write about your skill path here ..." />
      </Head>
        <section className="h-screen">
          <div className="container h-full px-6 py-24">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="hidden lg:block mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <Image
                  width={48}
                  height={48}
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="w-full"
                  alt="Phone image" />
              </div>
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <GoogleLoginComp/>
            </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default LoginPage