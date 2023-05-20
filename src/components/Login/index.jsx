import React from 'react'
import { useForm } from 'react-hook-form';
import useLogin from './hooks/useLogin'
import { loginSchema } from '../common/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../widgets/Input';
import Button from '../widgets/Button';
import UserIcon from '../../icons/userIcons'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const defaultValue={
    email:undefined,
    password: undefined,
  }
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode:'onTouched',
    reValidateMode:'onChange',
    defaultValue,
   resolver:yupResolver(loginSchema)
  });

  const {onSubmit,userData,loading} = useLogin()

  return (
    <>
      <div className='login-header'>
        <div className=' login-sub_header border p-8 rounded-md'>
        <h1 className='text-center  font-semibold leading-loose text-3xl'>Login</h1>
        <div>
          <UserIcon/>
        </div>
        <div>
          <form>
          <Input label="Email" placeholder="Enter email"
            labelClassName="text-md tracking-tight my-2"
            mandatory
            type="email" 
            className=" w-full border-inherit px-2 py-1"
            rest={register("email")} 
            error={errors?.email?.message }  
            values={watch('email')} 
            onChange={(event)=>{setValue('email',event.target.value),clearErrors('email')}}/>

        
          <Input label="Password" placeholder="Enter password" 
            mandatory
            labelClassName="text-md tracking-tight my-2"
            className="w-full border-inherit px-2 py-1"
            type="password"
            rest={register("password")}  
            error={errors?.password?.message }
            values={watch('password')} 
            onChange={(event)=>{setValue('password',event.target.value),clearErrors('password')}}/>
            <div>
            </div>
       
            <Button loading={loading} title="Login" className="login-button leading-7 line-clamp-3  rounded-md border-r py-2" onClick={handleSubmit(onSubmit)} />
          </form>
        </div>
        </div>
      </div>
      <Toaster/>
    </>
  )
}

export default Login