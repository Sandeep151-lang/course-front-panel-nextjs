import React, { useEffect, useState } from 'react'
import DrawerWrapper from '../DrawerRapper/DrawerRaper'
import Input from '../widgets/Input'
import Button from '../widgets/Button'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Toaster from '@/shared/Toaster'
import {createCategory,createCourse} from '../../components/common/schema'
import { yupResolver } from '@hookform/resolvers/yup';
import Dropdown from '../widgets/Select'
import useSyncCourse from './hooks/useSyncCourse'
import commonApi from '@/ApiRoute/commonApi'
import Select from '../widgets/AsyncSelect'

const AddCategory = ({open ,setOpen,data,courseList,paginator,getData,category,updateData}) => {
    const [buttonLoading,setButtonLoading] = useState(false)
    const defaultValue = {
        _id:undefined,
        categoryName:undefined,
        courseImg:undefined,
        courseName:undefined,
        coursePrice:undefined
    }

    const onCloseModal=()=>{
      updateData()
      setOpen(false)
      clearErrors()
      reset({...defaultValue})
   }
 
    useEffect(()=>{
      if(open && data?._id){
        setValue("_id",data?._id)
        setValue('categoryName',{label:data?.categoryName?.CategoryName,value:data?.categoryName?._id})
        setValue('courseImg',data?.courseImg)
        setValue('courseName',data?.courseName)
        setValue('coursePrice',data?.coursePrice)
      }
    },[open])


    const {
      register,
      handleSubmit,
      watch,
      setValue,
      clearErrors,
      resetField,
      reset,
      formState: { errors },
    } = useForm({
      mode:' onChange',
      reValidateMode:'onTouched',
      defaultValue,
      resolver:yupResolver(createCourse)
    });
    
    
   const {Axios}= commonApi({})
    
  
    const onSubmit = async(values)=>{
      setButtonLoading(true)
      try {
      const create=await Axios[data?._id ? "put" : "post"](`course/${data?._id ?  `update/${data?._id}` : "create"}`,values)
      if(create){
        Toaster("success",create?.data?.message)
        setButtonLoading(false)
        setOpen(false)
        courseList({
          page:paginator?.page,
          limit:paginator?.limit,
         })
         reset({...defaultValue})
      }
      } catch (error) {
        Toaster('error',error?.response?.data?.message)
          setButtonLoading(false) 
      }  
  }

  
  return (
    <DrawerWrapper onClose={onCloseModal} open={open} setOpen={setOpen} width='max-w-2xl' 
    title={data?._id ? "Update Course"  : "Add Course"}
    modalFooter={
        <>
           <div className='grid gap-3'>
{/* 
                <Dropdown 
                error={errors?.categoryName?.message}
                placeholder="Select Category" 
                rest={register('categoryName')}
                value={watch('CategoryNm')}
                onChange={(opt)=>{
                  setValue('categoryName',opt?.value),
                  setValue('CategoryNm',opt),
                  clearErrors("CategoryName")}} 
                options={category}  
                label="Select Category" 
                mandatory 
                isSearchable
                /> */}

                <Select
                  label="Select Category" 
                  mandatory
                  error={errors?.categoryName?.message}
                  value={watch('CategoryNm')}
                  loadOptions={getData}
                  defaultOptions={category}
                  placeholder="Select Category"
                  onChange={(opt)=>{
                    setValue('categoryName',opt?.value),
                    setValue('CategoryNm',opt),
                    clearErrors("CategoryName")
                  }} 
                  onInputChange={(e)=>console.log(e)}
                  isSearch
                  isClearable
                />

                <Input 
                placeholder="Enter Couse Image Url" 
                values={watch('courseImg')} 
                rest={register('courseImg')}
                error={errors?.courseImg?.message } 
                onChange={(event)=>{setValue('courseImg',event.target.value),
                clearErrors("courseImg")}} 
                label="Course Image"  
                mandatory 
                className="w-full border border-slate-950 px-2 my-1"
                />  

                <Input 
                placeholder="Enter Couse Name" 
                values={watch('courseName')} 
                rest={register('courseName')}
                error={errors?.courseName?.message } 
                onChange={(event)=>{setValue('courseName',event.target.value),clearErrors("courseName")}} 
                label="Course Name"  
                mandatory 
                className="w-full border border-slate-950 px-2 my-1"
                />
                <Input 
                type="number"
                placeholder="Enter Course Price" 
                values={watch('coursePrice')} 
                rest={register('coursePrice')}
                error={errors?.coursePrice?.message } 
                onChange={(event)=>{setValue('coursePrice',event.target.value),clearErrors("coursePrice")}} 
                label="Course Price"  
                mandatory 
                className="w-full border border-slate-950 px-2 my-1"
                />
           </div> 
        </>
        }
        footer={
          <>
          <Button title="Close" className="bg-black rounded-md text-white" onClick={onCloseModal}/>
          <Button loading={buttonLoading} title={data?._id ? "Update Course"  : "Add Course"} className="rounded-md" onClick={handleSubmit(onSubmit)}/>
          </>
      }
        
    />
  )
}

export default AddCategory