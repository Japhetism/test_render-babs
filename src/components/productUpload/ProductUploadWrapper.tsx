import React from 'react'

const ProductUploadWrapper = ({title, children}: {title: string, children:React.ReactNode}) => {
  return (
    <div className='flex flex-col items-start justify-start xl:gap-[14px] lg:gap-[10px] gap-[7px]'>
        <h2 className='xl:text-2xl lg:text-xl text-lg font-semibold text-[#464255] xl:px-[14px] lg:px-[10px] px-[7px]'>{title}</h2>
        <div className='flex flex-col xl:gap-6 lg:gap-[15px] gap-3 border border-[#cec1c1] border-opacity-80 rounded-[14px] xl:p-6 lg:p-[18px] p-3 w-full'>
            {children}
        </div>
    </div>
  )
}

export default ProductUploadWrapper