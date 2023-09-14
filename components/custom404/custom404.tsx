import Link from 'next/link'
import React from 'react'

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/"className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
            Go Back to Home
        </Link>
      </div>
  )
}

export default Custom404