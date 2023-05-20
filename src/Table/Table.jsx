import React, { useState,useContext,useCallback } from 'react'
import { useTable } from 'react-table'
import AppContext from '../context/AppContext'
import Button from '../components/widgets/Button'
import Loader from '@/shared/audioLoader'


const Pagination = ({  onPagination, paginator = {},pageIndex }) => {

  const {hasNextPage,
    hasPrevPage,
    limit,
    offset,
    page,
    totalPages,
    prevPage,
    nextPage,
    pagingCounter,
    totalDocs}= paginator

    const gotoPrev = useCallback(() => {
      onPagination(prevPage, limit)
    }, [prevPage]);

    const gotoNext = useCallback(() => {
      onPagination(nextPage, limit)
    }, [nextPage]);
    
  return (
    <div className="pagination my-2 flex flex-row-reverse md:justify-between">
      <div className="flex justify-end">
      <div>
        <p> Total  <span>{totalDocs}</span> Records</p>
        </div>
        <div>  
        <Button
        title="Prev"
        onClick={ gotoPrev}
        disabled={prevPage===null}
        className="rounded-md"
        />
        </div>
        <input
        disabled
          type="text"
          value={page}
          defaultValue={page}
          className="w-20 py-1 px-2 rounded mx-3 border border-solid border-neutral-800"
        />
        <span>/</span> <span>{totalPages}</span>
        <Button
        title="Next"
        className="rounded-md"
        onClick={gotoNext}
        disabled={nextPage===null}
        />
        
      </div>
      <div className='flex-start'>
        <span className='mx-2 font-medium'>
        View
        </span>
      <select
    value={limit}
    onChange={e => {
      pageIndex(Number(e.target.value))
        onPagination(1,Number(e.target.value))
      }}
      >
    {[5,10, 20, 30, 40, 50].map(pageSize => (
      <option key={pageSize} value={pageSize}>
         {pageSize}
      </option>
    ))}
  </select>
  
  <span className='mx-2 font-medium'>
  Records per page
      </span>
    </div>
    </div>
  )
}

const Table = ({ columns, data, limit, paginator, onPagination ,loading}) => {
  const first = useContext(AppContext)
  const [set, pageIndex] = useState(2)
  const [sets, pageOptions] = useState(1)
  const pageSize = 1

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, usePagination } = useTable({
    columns,
    data,
    paginator,
  })

  

  return (
    <>
    <div className=" bg-white border rounded-lg border-current overflow-auto">
      <div className="relative">
        {loading && <Loader />}
        <div className={`h-[calc(100vh-150px)] `}>
          <table className="w-full text-sm" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                    style={column.style}
                    className="text-xs px-3 py-2.5 text-left bg-slate-300 visible 
                    border-b border-r border-current font-semibold whitespace-nowrap sticky top-0 z-10"
                    {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>  
            <tbody {...getTableBodyProps()} className='overflow-auto'> 
            {loading && <Loader/>}    
              {rows?.length ? (
                rows.map((row) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()} className="border-b border-current">
                      {row.cells.map((cell) => {
                        return (
                          <td
                            className="relative text-xs text-foreground font-medium px-3 py-2.5 border-r border-current whitespace-nowrap"
                            {...cell.getCellProps()}
                          >
                            {cell.render("Cell")}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })
              ) : (
                <div className="min-h-20 loader">
                  <div className="w-full font-bold no-data">{loading ? " " : "No Data Found"}</div>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      <Pagination className="py-2" onPagination={onPagination} paginator={paginator}  pageIndex={pageIndex} limit={set}/>
      </>
  )


}

export default Table
