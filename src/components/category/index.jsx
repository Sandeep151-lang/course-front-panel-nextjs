import React,{useState,useEffect} from 'react'
import LayoutWrapper from '../Layout'
import useSyncCategory from './hooks/useSyncCategory'
import axios from 'axios'
import Table from '@/Table/Table'
import Input from '../widgets/Input'
import Button from '../widgets/Button'
import AddCategory from './AddCategory'
import CategoryColumn from './colomn'
import  { Toaster } from 'react-hot-toast';


const Category = (user) => {
  const [updateCourse, setUpdateCourse]= useState([])
  
const {
  setOpen,
  open,
  categoryList,
  paginator,
  loading,
  onPagination,
  getCategory,
  debounced,
}= useSyncCategory()
  
  
const openModal=()=>{
  setOpen(true)
  setUpdateCourse()
}

 
  return (
    <LayoutWrapper 
    user={user}
    title={
        <>
            <h1>Category</h1>
            <div className='flex'>
                <Input placeholder="Search By Category..."  onChange={(e)=>debounced((e.target.value || ""))}  className="px-2 py-1 "/>
            <div>
                <Button title="Create" className="mt-2 px-2 rounded-md text-sm" onClick={()=>openModal()}/>
            </div>
            </div> 
        </>
        }
    >
      <Table 
      columns={
        CategoryColumn({
        categoryList,
        getCategory,
        setOpen,
        open,
        setUpdateCourse,
        paginator
      }).columns}
      data={categoryList} 
      paginator={paginator}
      onPagination={onPagination} 
      loading={loading}
      />

      <AddCategory open={open} paginator={paginator} setOpen={setOpen} other={updateCourse} getCategory={getCategory} setUpdateCourse={setUpdateCourse}/>
      <Toaster/>
    </LayoutWrapper>
  )
}

export default Category