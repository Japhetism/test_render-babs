import React, { useEffect } from 'react';
import { usePagination, useTable } from 'react-table';
import { usePathname, useRouter } from 'next/navigation';
import { useCustomPagination } from './useCustomPagination';
import { Product } from '@/types/products';
import Pagination from './Pagination';
import { nairaConverter } from '@/utils/functions';
import ImageFetcher from '@/components/imageFetcher';
import TableLoader from '@/components/loader/table-loader';
import Button from '@/components/Button';

interface Props {
  title: string;
  description: string;
  borderColor: string;
  isLoading: boolean;
  data: Product[];
  allPages: number;
  currentPage: number;
  children: React.ReactNode;
  navigateToProductDetails: (productId: string) => void;
}

const FoodTable: React.FC<Props> = ({ title, description, borderColor, isLoading, data, allPages, currentPage, children, navigateToProductDetails }) => {
  const { push } = useRouter();
  const path = usePathname();

  const columns = React.useMemo(() => {
    const cols = [
      {
        Header: 'Image',
        accessor: (row: any) => (
          <div className="relative flex items-center justify-center h-10 w-10">
            <ImageFetcher name={`products/${row?.images?.[0]}`} altName={row?.name} />
          </div>
        )
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
      },
      {
        Header: 'Amount',
        accessor: 'price',
        Cell: ({ value }: { value: number }) => <span>{nairaConverter.format(value)}</span>
      },
      {
        Header: 'Status',
        accessor: (row: Product) => (
          <span className='bg-[#ffe6e6] text-[#ff5b5b] lg:text-xs text-[10px] leading-4 text-center font-normal rounded-lg px-2 py-1'>
            {`${row?.status?.charAt(0)?.toUpperCase()}${row?.status?.slice(1)}`}
          </span>
        ),
      },
      {
        Header: 'View',
        accessor: (row: any) => (
          <Button
            type="button"
            children="View Product"
            className="bg-primary_100 px-2 py-1 text-xs text-white text-center text-base font-semibold hover:opacity-80"
            onClick={() => navigateToProductDetails(row?._id)}
          />
        ),
      },
    ];

    if (data.some(row => row.vendor?.name)) {
      cols.splice(3, 0, { 
        Header: 'Vendor Name',
        accessor: (row: Product) => <span>{row?.vendor?.name}</span>
      });
    }

    return cols;
  }, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    setPageSize,
  } = useTable({ columns, data } as any, usePagination);

  const paginationRange = useCustomPagination({
    totalPageCount: allPages,
    currentPage: currentPage,
    siblingCount: 1,
  });

  useEffect(() => {
    setPageSize(6);
  }, [setPageSize]);

  if (isLoading) return <TableLoader rows={6} cols={10} />

  return (
    <>
      <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 mb-7">
                <div
                className={`border-[${borderColor}] border-e-[6px] w-1 h-36 rounded-2xl`}
                ></div>
                <div className="ps-3 w-full">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold text-xl text-[#111827] font-inter ">
                                {title}
                            </p>
                            <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
                                {description}
                            </p>
                        </div>
                        {children}
                    </div>
                    <table {...getTableProps()}className="min-w-full divide-y divide-gray-200 table-fixed">
                        <thead className="bg-gray-100">
                            {headerGroups.map((headerGroup, index) => (
                                <tr {...headerGroup.getHeaderGroupProps()} key={`${headerGroup.id}-${index}`}>
                                    {headerGroup.headers.map((column, index) => (
                                        <th {...column.getHeaderProps()} key={`${column.id}${index+1}`} className="p-4 text-left text-sm font-semibold text-dark_700 capitalize tracking-wider">
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
                                        <tr {...row.getRowProps()} key={`${row.id}-${index}}`} className={`${index % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]" }`}>
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
                </div>
            </div>
        
    </>
  );
};

export default FoodTable;
