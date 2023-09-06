import Head from "next/head";
import Link from "next/link";

const NotFound: React.FC = () => {
    return (
        <>
         <Head>
            <link rel="icon" href="/assets/favicon.ico" /> 
            <title>SkillPath |404</title>
            <meta name="author" content="Maziar Rumiani" />
            <meta name="keywords" content="skill, skillpath" />
            <meta name="description" content="Nothing is here" />
        </Head>
      <main>
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/"className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
          Go Back to Home
      </Link>
    </div>
      </main>
        </>
    )
  }

export default NotFound;