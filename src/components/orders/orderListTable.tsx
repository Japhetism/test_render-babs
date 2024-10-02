"use client";

import { usePagination, useTable } from "react-table";
import { Select } from "@/components";
import TableLoader from "../loader/table-loader";

interface IOrderListTable {
    isLoading: boolean;
    title: string;
    description: string;
    columns: any;
    data: any;
    borderColor: string;
    children: React.ReactNode;
}

const OrderListTable = ({
    isLoading,
    title,
    description,
    columns,
    data,
    borderColor,
    children,
}: IOrderListTable) => {
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
                    {data.length && (
                        <button
                            type="submit"
                            className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow p-2 rounded-md flex justify-center ml-auto mt-5"
                            // onClick={() => console.log("logged")}
                        >
                            Download Summary
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default OrderListTable;