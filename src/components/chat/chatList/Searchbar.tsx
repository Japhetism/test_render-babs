import React from 'react'
import { SearchIcon } from '../../../../public/assets/icons/header'
import { MicIcon } from '../../../../public/assets/icons/chat'

const Searchbar = () => {
  return (
    <div className="relative flex items-center justify-start w-full">
        <div className="absolute inset-y-0 left-0 flex items-center xl:pl-6 pl-3 pointer-events-none">
            <SearchIcon className='xl:w-[18px] xl:h-[18px] w-3 h-3' />
        </div>
        <input type="text" className="block xl:py-4 lg:py-[10px] py-2 xl:px-12 px-8 w-full placeholder:text-dark_400 text-dark_400 bg-[#f6f6f6] rounded-full border border-[#ebebeb]  xl:text-base lg:text-sm text-xs focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none placeholder:text-xs" placeholder='Search here...' />
        <div className="absolute inset-y-0 right-0 flex items-center xl:pr-6 pr-3 pointer-events-none">
            <MicIcon />
        </div>
  </div>   
  )
}

export default Searchbar