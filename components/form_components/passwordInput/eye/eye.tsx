import Image from 'next/image'
import React from 'react'

const Eye = ({showPass}:{showPass:boolean}) => {
  return (
    <>
    {showPass ? (
              <Image
                width={24}
                height={24}
                src="./assets/icons/eye.svg"
                alt="eye"
              />
            ) : (
              <Image
                width={24}
                height={24}
                src="./assets/icons/eye-off.svg"
                alt="eye-off"
              />
            )}
    </>
  )
}

export default Eye