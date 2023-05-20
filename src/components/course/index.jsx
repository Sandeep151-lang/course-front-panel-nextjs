import React,{useState} from 'react'
import LayoutWrapper from '../Layout'
import Input from '../widgets/Input'
import Table from '@/Table/Table'
import Button from '../widgets/Button'
import AddCourse from './AddCourse'
import useSyncCourse from './hooks/useSyncCourse'
import courseColumn from './coloumn'
import  { Toaster } from 'react-hot-toast';

const Course = ({user}) => {
  const [updateCourse, setUpdateCourse]= useState([])

    const [open,setOpen] = useState(false)
    const openModal=()=>{
        setOpen(true)
    }
   const {courseData,paginator,courseList,onPagination,debounced,loading,getData,category}= useSyncCourse({open})
  
  return (
    <LayoutWrapper 
    user={user}
    title={
        <>
            <h1>Course</h1>
            <div className='flex'>
                <Input placeholder="Search By Course" onChange={(e)=>debounced(e.target.value)} className="px-2 py-1"/>
            <div>
                <Button title="Create" className="mt-2 px-2 rounded text-sm" onClick={()=>openModal()}/>
            </div>
            </div> 
        </>
        }
    >
    <Table 
      columns={courseColumn({
        courseList,
        paginator,
        setOpen,
        setUpdateCourse,
        courseData}).columns}
      data={courseData} 
      paginator={paginator}
      onPagination={onPagination} 
      loading={loading}
      />

        <AddCourse 
        open={open}
        getData={getData} 
        paginator={paginator} 
        setOpen={setOpen} 
        data={updateCourse} 
        courseList={courseList}
        category={category}
        updateData={setUpdateCourse}
        />
        <Toaster/>
    </LayoutWrapper>
  )
}

export default Course