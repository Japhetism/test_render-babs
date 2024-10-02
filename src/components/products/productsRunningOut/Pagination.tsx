import React from 'react';
import { DOTS } from './useCustomPagination';
import { PaginationProps } from '@/types/products';



const Pagination: React.FC<PaginationProps> = ({
  pageIndex,
  paginationRange,
  gotoPage,
}) => {
  return (
    <div className="py-3 flex items-center text-center md:justify-center justify-start pt-5 bg-gray-100">
    <div className="flex-1 flex items-center md:justify-center justify-start" aria-label="Pagination">
      <div className="relative z-0 inline-flex items-center justify-center md:mx-auto ml-10 rounded-md shadow-sm space-x-5" aria-label="Pagination">
            {paginationRange?.map((pageNumber:any, index:number) => {
                if (pageNumber === DOTS) {
                    return (
                        <div
                        key={index} className="relative bottom-1">...</div>
                    );
                }

                if ((pageNumber - 1) === pageIndex) {
                    return (
                        <div
                        key={index} className="relative bottom-1">...</div>
                        );
                    }

                    if ((pageNumber - 1) === pageIndex) {
                        return (
                            <div
                                key={index}
                                className='active:bg-red_100 text-[10px] bg-primary_100 rounded-lg text-white py-2 px-3 cursor-pointer'
                                onClick={() => gotoPage(pageNumber - 1)}>{pageNumber}</div>
                        );
                    }

                    return (
                        <div
                            key={index}
                            className='active:bg-red_100 text-[10px] bg-primary_100 rounded-lg text-white py-2 px-3 cursor-pointer'
                            onClick={() => gotoPage(pageNumber - 1)}>{pageNumber}</div>
                    );
                })}
               </div>
             </div>
         </div>
  );
};

export default Pagination;
