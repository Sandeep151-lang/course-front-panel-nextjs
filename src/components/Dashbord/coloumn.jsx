import {useMemo} from 'react'

const dashColoumn = (setList) => {
    const columns = useMemo(
        () => [
          {
            Header: 'SL.NO',
            accessor: 'index', // accessor is the "key" in the data,
            style: {
              width: 42,
              minWidth: 42,
            },        
            Cell: ({row}) => {
              return <p>{parseInt(row?.id) + 1}</p>;
            },
          },
          {
            Header: 'First Name',
            accessor: 'firstName', // accessor is the "key" in the data
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Occupation',
            accessor: 'occupation',
          },
        ],
        [setList]
      );
  return {

    columns
  }
  
}

export default dashColoumn