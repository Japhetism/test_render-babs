import React from 'react';

const TableLoader = ({ cols, rows }: { cols: number, rows: number }) => (
    <div className="flex flex-col w-full font-barlow">
        <div className="overflow-auto whitespace-nowrap scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-300 rounded-xl">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                {Array.from({ length: cols }).map((_, colIndex) => (
                                    <th
                                        key={colIndex}
                                        className="p-4 text-left text-sm font-semibold text-dark_700 Capitalize rounded-xl tracking-wider"
                                    >
                                        <div className="h-6 bg-gray-300 rounded" style={{ width: `${Math.random() * 100 + 20}px` }} />
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Array.from({ length: rows }).map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Array.from({ length: cols }).map((_, cellIndex) => (
                                        <td
                                            key={cellIndex}
                                            className="p-4 text-sm font-medium tracking-wide text-left text-dark_700 whitespace-nowrap"
                                        >
                                            <div className="h-6 bg-gray-300 rounded" />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);

export default TableLoader;
