import React,{useMemo, useState} from 'react'
import TableAction from '@/shared/TableAction/TableAction';
import Toggle from '@/shared/Toggle';
import commonApi from '@/ApiRoute/commonApi';

const CategoryColumn = ({categoryList,getData,getCategory,setOpen,setUpdateCourse,...other}) => {

  
  const openModal=(data)=>{  
    setOpen(true)
    setUpdateCourse(data)
  }
  
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
                Header: 'Slug',
                accessor: 'Slug',
              },
              {
                Header: 'Category',
                accessor: 'CategoryName', // accessor is the "key" in the data
              },
              {
                Header:"Active",
                accessor:"isActive",
                style: {
                  width: 50,
                  minWidth: 50,
                },
                  Cell:({ row })=><Toggle original={row?.original} module="category/update"/>   
              },
              {
                Header:'Action',
                accessor:"action",
                Cell: ({row}) => {
                  // return <p>{parseInt(row?.id) + 1}</p>;
                return(     
                 <TableAction 
                  // Delete="Delete" 
                  Edit="Edit" 
                  module="category"
                  onClickEdit={()=>openModal(row?.original)} 
                  data={row?.original} 
                  getList={getCategory}
                  paginator={other?.paginator}
                 /> 
                  )
                },

              }
            ],
            [categoryList]
      );

  return {

    columns
  }
  
}

export default CategoryColumn