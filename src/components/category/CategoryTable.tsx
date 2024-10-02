import React, { useEffect } from 'react';
import { usePagination, useTable } from 'react-table';
import ImageFetcher from '../imageFetcher';
import Pagination from './Pagination';
import TableLoader from '../loader/table-loader';
import { FoodProduct } from '@/types/products';
import { useCustomPagination} from './useCustomPagination';

interface Props {
  isLoading: boolean;
  data: FoodProduct[];
  onDelete: (productCategory: any) => void;
  navigateToCategoriesDetails: (categoryId: string) => void;
}

const CategoryTable: React.FC<Props> = ({ data, navigateToCategoriesDetails, onDelete, isLoading }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Image',
        accessor: (row: any) => {
          return (
            <div className="relative flex items-center justify-center h-10 w-10">
              <ImageFetcher name={`products/${row?.images?.[0]}`} altName={row?.name} />
            </div>
          )
        }
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Description',
        accessor: (row: any) => {
          return <div className="w-40 truncate">{row.description}</div>
        }
      },
      {
        Header: 'Markup Type',
        accessor: 'markupType',
      },
      {
        Header: 'Markup Value',
        accessor: 'markupValue',
      },
      {
        Header: 'Delete',
        accessor: (row: FoodProduct) => {
          return <button className='bg-transparent text-red_100 lg:text-xs text-[10px] leading-4 text-center font-normal rounded-lg lg:px-5 md:px-4 px-3 py-1 border border-red_100 border-opacity-50' onClick={() => onDelete(row)}>Delete</button>;
        },
      },
      {
        Header: 'Edit',
        accessor: (row: FoodProduct) => {
          return <button className='bg-transparent text-primary_100 lg:text-xs text-[10px] leading-4 text-center font-normal rounded-lg lg:px-5 md:px-4 px-3 py-1 border border-primary_100 border-opacity-50' onClick={() => navigateToCategoriesDetails(row?._id)}>Edit</button>;
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //rows,
    prepareRow,
    page,
    pageCount,
    gotoPage,
    setPageSize,
    state,
  } = useTable({ columns, data } as any, usePagination);


  const {pageIndex} = state;
  const paginationRange = useCustomPagination({
    totalPageCount: pageCount,
    currentPage: pageIndex,
    siblingCount: 1
});

useEffect(() => {
        setPageSize(10);
  }, [setPageSize]); //set according to your preference

  if (isLoading) {
    return <TableLoader rows={4} cols={8} />
  }

  return (
    <div className="flex flex-col w-full font-barlow">
    <div className="overflow-auto whitespace-nowrap scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8">
      <div  className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-300 rounded-xl relative">
        <div className='bg-primary_100 bg-opacity-70 z-50 rounded-2xl xl:w-[6px] xl:h-[202px] w-1 lg:h-[120px] md:h-24 h-16 absolute -left-[2px] top-1/2 transform -translate-y-1/2'/>
        <table {...getTableProps()}className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={`${headerGroup.id}-${index}`}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} key={column.id} className="p-4 text-left text-sm font-semibold text-dark_700 Capitalize rounded-xl tracking-wider">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
        {page?.length > 0 ? (
          page?.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={`${row.id}-${index}}`} className={`${index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white" }`}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id} className="p-4 text-sm font-medium tracking-wide text-left text-dark_700 whitespace-nowrap">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={headerGroups[0].headers.length} className="p-4 text-center text-sm text-dark_700">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
    {/*pagination*/}
        <Pagination 
          pageIndex={pageIndex}
          paginationRange={paginationRange}
          gotoPage={gotoPage}
        />
            </div>
          </div>
    </div>
  </div>
  );
};

export default CategoryTable;
