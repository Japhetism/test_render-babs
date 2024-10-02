import React from 'react'
import goods from '../../../public/assets/auth/goods.png'
import Image from 'next/image'


const AuthWrapper = ({title, children}: {title:string, children: React.ReactNode} ) => {
  return (
    <div className='flex w-full bg-white font-barlow h-screen'>
        <div className="md:flex items-start justify-start lg:basis-[28%] md:basis-[260px] bg-primary_100 relative lg:px-[30px] py-[41px] md:px-5 hidden">
            <div className='flex flex-col items-start justify-start text-white'>
                <h1 className='lg:text-[41px] text-3xl font-semibold lg:leading-[48px]'>Komas500</h1>
                <p className='lg:text-xl text-base font-normal'>Komas500 admin dashboard</p>
            </div>
            <Image src={goods} alt="products" width={361} height={356} className='object-contain absolute bottom-[25px] lg:left-[57px] left-10'/>
        </div>
        <div className='flex items-start justify-center w-full lg:overflow-y-scroll'>
        <div className='flex flex-col items-center justify-start basis-full bg-white mx-auto md:py-[100px] py-16 md:px-0 px-5 w-full md:max-w-[464px]'>
           <h1 className='text-[28px] mb-[33px] font-semibold text-dark_200'>{title}</h1>
            {children}
        </div>
        </div>
    </div>
  )
}

export default AuthWrapper