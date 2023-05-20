import React, { useMemo } from 'react'
import Toggle from '@/shared/Toggle';
import TableAction from '@/shared/TableAction/TableAction';
import PublishToggle from '@/shared/PublishToggle';
import Question from '@/icons/Question';
import { useRouter } from 'next/router';

const courseColumn = ({courseList,paginator,courseData,setOpen,setUpdateCourse}) => {
  const router = useRouter()

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
                Header: 'Category',
                accessor: 'categoryName.CategoryName', // accessor is the "key" in the data
              },
              {
                Header:"Course Image",
                accessor:"courseImg",
                Cell :({row})=><div className='mx-2'><img width="30" className='rounded' src={row?.original?.courseImg}/></div>
              },
              {
                Header:"Courses",
                accessor:"courseName"
              },
              {
                Header:"Course Price",
                accessor:"coursePrice",
                Cell:({row})=><div className=''>Rs {(row?.original?.coursePrice).toFixed(2)}</div>
              },
              {
                Header:"Active",
                accessor:"isActive",
                style: {
                  width: 50,
                  minWidth: 50,
                },
                  Cell:({ row })=><Toggle paginator={paginator} original={row?.original} module="course/update" getList={courseList}/>
                 
              },
              {
                Header:"Publish",
                accessor:"isDefault",
                style: {
                  width: 50,
                  minWidth: 50,
                },
                  Cell:({ row })=><PublishToggle original={row?.original} module="course/update" />
                 
              },
              {
                Header:'Action',
                accessor:"action",
                Cell: ({row}) => {
                  // return <p>{parseInt(row?.id) + 1}</p>;
                return(     
                 <TableAction
                  Delete="Delete" 
                  Edit
                  module="course"
                  onClickEdit={()=>openModal(row?.original)} 
                  data={row?.original} 
                  getList={courseList}
                  paginator={paginator}
                  children={
                    <>
                     {row?.original?.isActive && <Question className="mx-2" onClick={()=> 
                     router.push({pathname:"/questions", 
                     query:{
                      courseId : row?.original?._id
                     }
                    })
                     }/>}
                    </>
                  }
                 /> 
                  )
                },

              }
            ],
            [courseData]
      );

  return {
    columns
  }
}

export default courseColumn