
import Toaster from '@/shared/Toaster'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'


const useLogin = () => {
  const [loading,setLoading] = useState(false)
    const router = useRouter()
    
    const onSubmit = async(values)=>{
      setLoading(false)
      const url=  `https://marlo-tech-kytn.vercel.app`
        try {
          setLoading(true)
          const singIn = await axios.post(`${url}/user/singIn`,values)
          if(singIn){
            Toaster("success","Login Successfull")
            const response =await fetch("/api/sessions", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(singIn?.data)
            });
            if (response.ok) {
              return router.push("/dashboard");
            }
          }
        } catch (error) {
          setLoading(false)
          Toaster("error",error?.response?.data?.message) 
        }  
    }

  
 return {
  onSubmit,
  loading
 }
}

export default useLogin