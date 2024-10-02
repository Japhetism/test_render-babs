import React from 'react';
import { usePagination, useTable } from 'react-table';
import { Vendor } from '@/types/vendors';
import Button from '../Button';
import TableLoader from '../loader/table-loader';
import ImageFetcher from '../imageFetcher';

interface Props {
  data: Vendor[];
  isLoading: boolean;
  navigateToVendorDetails: (id: string) => void;
}

const VendorsTable: React.FC<Props> = ({ data, isLoading, navigateToVendorDetails }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Logo',
        accessor: (row: any) => {
          return (
            <div className="relative flex items-center justify-center h-10 w-10">
              <ImageFetcher name={`vendor/${row.logo}`} altName={row.name} />
            </div>
          );
        },
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Address',
        accessor: (row: any) => {
          return <div className="w-40 truncate">{row.address}</div>
        },
        
      },
      {
        Header: 'Email',
        accessor: (row: any) => {
          return <div className="w-48 truncate">{row.email}</div>
        },
      },
      {
        Header: 'no. of Staff',
        accessor: 'noOfStaff',
      },
      {
        Header: 'Geolocation',
        accessor: (row: any) => {
          return (
            <>
              {row.geolocation && <span>LAT: {row.geolocation[0]}</span>}&nbsp;&nbsp;
              {row.geolocation && <span>LNG: {row.geolocation[1]}</span>}
            </>
          )
        },
      },
      {
        Header: 'View',
        accessor: (row: any) => {
          return (
            <Button
              type="button"
              children="View"
              className="bg-primary_100 px-2 py-1 text-xs text-white text-center text-base font-semibold hover:opacity-80"
              onClick={() => navigateToVendorDetails(row._id)}
            />
          )
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
  } = useTable({ columns, data } as any, usePagination);

  if (isLoading) {
    return <TableLoader rows={4} cols={8} />
  }

  return (
    <>
      <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 mb-7">
                <div
                className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
                ></div>
                <div className="ps-3 w-full">
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

export default VendorsTable;
