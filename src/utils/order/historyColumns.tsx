export const historyColumns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Date & Time',
    accessor: 'date',
  },
  {
    Header: 'Location',
    accessor: 'location',
  },
  {
    Header: 'Vendor',
    accessor: 'IdNumber',
  },
  {
    Header: 'Amount',
    accessor: (row: { amount: any; }) => <div>{`N${row.amount}`}</div>,
  },
  {
    Header: 'Status',
    accessor: (row: { payment: any; }) => (
      row.payment ? (
        <span className="px-2 py-1 text-[8px] text-[#03543F] text-center bg-[#DEF7EC] rounded-xl">
          Completed
        </span>
      ) : (
        <span className="px-2 py-1 text-[8px] text-[#FF5B5B] text-center bg-[#F5DBE0] rounded-xl">
          On Delivery
        </span>
      )
    ),
  },
  {
    Header: 'View',
    accessor: (row: any) => (
      <div
        onClick={() => {}}
        className="border p-[2px] border-[#3BB77E] rounded-md font-normal text-[10px] flex items-center justify-center text-[#3BB77E] cursor-pointer"
      >
        view
      </div>
    ),
  },
];
