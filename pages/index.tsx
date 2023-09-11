import NewPath from '@/components/newPath/newPath'
import Paths from '@/components/paths/paths'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" /> 
        <title>Skillpath</title>
        <meta name="author" content="Maziar Rumiani" />
        <meta name="keywords" content="skill, skillpath" />
        <meta name="description" content="Write about your skill path here ..." />
      </Head>
    <main
      className={`flex bg-blue-50 min-h-screen flex-col items-center justify-between sm:p-2 lg:p-4`}
      >
      <div className="z-10 p-2 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <Link href='/newpath'>
          <button  className='primaryBtn'>
            New Path
          </button>
        </Link>
        <Paths/>
      </div>
    </main>
      </>
  )
}
