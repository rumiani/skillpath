import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <link rel="icon" href="/assets/favicon.ico" /> 
        <title>MentorMeet</title>
        <meta name="author" content="Maziar Rumiani" />
        <meta name="keywords" content="Blog, article" />
        <meta name="description" content="Write your article here ..." />
      </Head>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Appa
      </div>
    </main>
      </>
  )
}
