import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4">
      <div className="container mx-auto">
        <div className="text-center">
          <Link href='/faq' className="gen_link m-4">FAQ</Link>
          <Link href='/contact' className="gen_link m-4">Contact Us</Link>

          <div className="flex justify-center space-x-4 mt-2">
            <Link
              href="mailto:contact@maziar9170@gmail.com"
              className="gen_link"
            >
              Email
            </Link>
            <Link
              href="https://linkedin.com/in/rumiani"
              target="_blank"
              rel="noopener noreferrer"
              className="gen_link"
            >
              LinkedIn
            </Link>
            <Link
              href="https://twitter.com/rumianist"
              target="_blank"
              rel="noopener noreferrer"
              className="gen_link"
            >
              X
            </Link>
          </div>
          <p className="mt-4 text-sm">
            &copy; {new Date().getFullYear()} Blog Platform. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer