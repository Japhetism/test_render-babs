import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-self-end justify-center xl:py-12 lg:py-9 md:py-6 py-4 text-[#6b7280] xl:text-base lg:text-sm text-xs font-normal font-inter bg-white w-full rounded-2xl'>&copy; {new Date().getFullYear()} All rights reserved.</div>
  )
}

export default Footer