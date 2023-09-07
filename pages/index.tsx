import NewPath from '@/components/newPath/newPath'
import Paths from '@/components/paths/paths'
import Head from 'next/head'

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
      className={`flex bg-blue-200 min-h-screen flex-col items-center justify-between sm:p-2 lg:p-4`}
      >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <NewPath />
        <Paths/>
      </div>
    </main>
      </>
  )
}
