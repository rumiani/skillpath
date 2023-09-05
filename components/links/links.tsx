import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Links = ({socialLinks}) => {
  return (
    <div className='border-gray-800 border-b-[1px]'>
        <strong>ارتباط با من:</strong>
        <ul className='flex flex-row gap-3 my-4'>
            {socialLinks.map( (item, index) =>{
                return(
                    <li key={index}>
                        <Link href={item.link}>
                            <Image alt={item.name} width={24} height={24} src={item.src} />
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Links