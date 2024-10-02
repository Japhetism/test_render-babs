'use client';

import React from 'react'
import Image from 'next/image'
import googleLogo from '../../../public/assets/auth/google.png'

const GoogleBtn = ({onClick}: {onClick: () => void}) => {
  return (
    <button className='flex items-center justify-center gap-[13px] w-full py-3 font-barlow border border-dark_300 rounded-md hover:bg-gray-100' onClick={onClick}>
        <Image src={googleLogo} width={25} height={25} alt="google-logo" className='object-contain'/>
        <span className='text-xs font-normal text-dark_100'>Continue with Google</span>
    </button>
  )
}

export default GoogleBtn