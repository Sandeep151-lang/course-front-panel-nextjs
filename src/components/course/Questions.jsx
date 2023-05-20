import React, { useState } from 'react'
import DrawerWrapper from '../DrawerRapper/DrawerRaper'
import Button from '../widgets/Button'
import { useFieldArray, useForm } from 'react-hook-form';
import Input from '../widgets/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from '../widgets/textArea';

const Questions = ({open,setOpen}) => {
    // const [open,setOpen]= useState(false)

    
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        clearErrors,
        control,
        resetField,
        reset,
        formState: { errors },
      } = useForm({
        mode:' onChange',
        reValidateMode:'onTouched',
        resolver:yupResolver()
      });

   const {fields, append,remove} =  useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "questions", 
      })

    const onCloseModal=()=>{
        setOpen(false)
      }
    
  return (
        <DrawerWrapper onClose={onCloseModal} open={open} setOpen={setOpen} width='max-w-3xl' 
        title={"Add Questions"}
        modalFooter={
            <>
               <div className='grid gap-2'>
                 <TextArea placeholder="Enter Question Description" classname="p-2" label="Enter Question Description" mandatory/>
                 <hr className='border border-current my-3'/>
                 <TextArea name="option" placeholder="Enter first Option" classname="p-2" label="Enter First Option" mandatory/>
                 <TextArea name="option" placeholder="Enter Second Option" classname="p-2" label="Enter Second Option" mandatory/>
                 <TextArea name="option" placeholder="Enter Third Option" classname="p-2" label="Enter Third Option" mandatory/>
                 <TextArea name="option" placeholder="Enter Fourth Option" classname="p-2" label="Enter Fourth Option" mandatory/>
               
                 
                </div>
             
            </>
            }
            footer={
              <>
              <Button title="Close" className="bg-black rounded-md text-white" onClick={onCloseModal}/>
              <Button  title={"Add Questions"} className="rounded-md" />
              </>
          }
            
        />
      
  )
}

export default Questions