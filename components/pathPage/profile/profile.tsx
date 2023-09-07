import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
      <Link href='./member/maziar-rumiani' >
            <div className='flex flex-wrap w-full'>
                <Image width={85} height={85} alt='avatar' src='/assets/images/avatar.png'/>
                <h2 className='font-bold self-end m-2'>Maziar Rumiani</h2>
            </div>
        </Link>
  )
}

export default Profile