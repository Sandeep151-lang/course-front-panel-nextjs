import React, { useEffect, useState } from 'react'
import DrawerWrapper from '../DrawerRapper/DrawerRaper'
import Input from '../widgets/Input'
import Button from '../widgets/Button'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Toaster from '@/shared/Toaster'
import {createCategory} from '../../components/common/schema'
import { yupResolver } from '@hookform/resolvers/yup';
import useSyncCategory from './hooks/useSyncCategory'
import commonApi from '@/ApiRoute/commonApi'


const AddCategory = ({open ,setOpen,getCategory,other,paginator}) => {
 
    const [buttonLoading,setButtonLoading] = useState(false)
    const defaultValue = {
        _id:undefined,
        Slug:undefined,
        CategoryName:undefined
    }

    useEffect(()=>{
      if(open && other?._id){
          setValue("_id",other?._id)
          setValue("Slug",other?.Slug)
          setValue("CategoryName",other?.CategoryName)
      }
    },
    [open])

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        clearErrors,
        reset,
        formState: { errors },
      } = useForm({
        mode:' onChange',
        reValidateMode:'onTouched',
         defaultValue,
          resolver:yupResolver(createCategory)
      });

     const {Axios} = commonApi({})
   
    const onSubmit = async(values)=>{
        setButtonLoading(true)
        try {
        const create=await Axios[other?._id ? "put" : "post"](`category/${other?._id ?  `update/${other?._id}` : "create"}`,values)
        if(create){
          Toaster("success",create?.data?.message)
          setButtonLoading(false)
          setOpen(false)
          getCategory({
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

    const onCloseModal=()=>{
      setOpen(false)
      clearErrors()
      reset({...defaultValue})
    }

  return (
    <DrawerWrapper onClose={onCloseModal} open={open} setOpen={setOpen} width='max-w-2xl'
    title={other?._id ? "Update Category" : "Add Category"}
    modalFooter={
        <>
           <div className=''>
                <Input 
                placeholder="Enter Slug" 
                values={watch('Slug')} 
                rest={register('Slug')}
                error={errors?.Slug?.message } 
                onChange={(event)=>{setValue('Slug',event.target.value),clearErrors("Slug")}} 
                label="Slug"  
                mandatory 
                className="w-full border border-slate-950 px-2 my-1"
                />

                <Input 
                error={errors?.CategoryName?.message } 
                placeholder="Enter Category name" 
                onChange={(event)=>{setValue('CategoryName',event.target.value),clearErrors("CategoryName")}} 
                values={watch('CategoryName')} 
                rest={register("CategoryName")} 
                label="Category Name" 
                mandatory 
                className="w-full border border-slate-950 px-2 my-1"/>
           </div> 
        </>
        }
        footer={
          <>
          <Button title="Close" className="bg-black rounded-md text-white" onClick={onCloseModal}/>
          <Button loading={buttonLoading} title={other?._id ? "Update Category" :"Add Category"} className="rounded-md" onClick={handleSubmit(onSubmit)}/>
          </>
      }
        
    />
  )
}

export default AddCategory