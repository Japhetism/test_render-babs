interface ITable {
    header: Array<string>
    data: Array<Record<string, any>> 
}

const Table = ({ header, data }: ITable) => (
    <div className="overflow-x-auto scrollbar-effect">
        <table className="min-w-full">
            <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
            <tr className="font-poppins tracking-wide">
                {header.map((item: string, index: number) => (
                    <th key={`${item}_${index+1}`} className="tableHead" style={{textTransform: "capitalize"}}>{item}</th>
                ))}
            </tr>
            </thead>
            <tbody>
                {data.map((row: Record<string, any>, rowIndex: number) => (
                    <tr
                        style={{
                        backgroundColor:
                            rowIndex % 2 === 0 ? "#ffffff" : "#F9FAFB",
                        }}
                        className="p-4 font-inter text-[#111827]"
                        key={rowIndex}
                    >
                        {header.map((key: string, colIndex: number) => {
                            return key !== "logo" ?
                                <td key={`${rowIndex}_${colIndex}`} className="hidden sm:table-cell tableBody">
                                    {row[key]} 
                                </td>
                            :
                            <div className="relative flex items-center pl-5">
                                <img
                                    src={row[key]} 
                                    alt={row.name} 
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const fallbackContainer = e.currentTarget.parentElement;
                                        if (fallbackContainer) {
                                            const firstLetter = row.name.charAt(0).toUpperCase();
                                            fallbackContainer.innerHTML = `
                                                <div class="flex items-center justify-center p-2 rounded-md bg-primary_100 text-white text-md font-bold">
                                                    ${firstLetter}
                                                </div>
                                            `;
                                        }
                                    }}
                                    className="rounded-xl overflow-hidden bg-gray-200 xl:h-16 xl:w-16 lg:h-14 lg:w-14 md:h-12 md:w-12 h-10 w-10"
                                />
                          </div> 
                        })}
                         <td className="hidden sm:table-cell tableBody">
                          <div
                            onClick={() => {}}
                            className="border p-[2px] border-[#3BB77E] rounded-md font-normal text-[10px] flex items-center justify-center text-[#3BB77E] cursor-pointer"
                          >
                            view
                          </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default Table;