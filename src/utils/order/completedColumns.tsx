export const completedColumns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Date & Time',
      accessor: 'date',
    },
    {
      Header: 'Vendor',
      accessor: 'vendor',
    },
    {
      Header: 'Driver',
      accessor: 'driver',
    },
    {
      Header: 'Amount',
      accessor: (row: { amount: any; }) => <div>{`N${row.amount}`}</div>,
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
  