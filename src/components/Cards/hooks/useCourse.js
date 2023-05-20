import commonApi from '@/ApiRoute/commonApi'
import { useRouter } from 'next/router'
import React, { useState,useEffect } from 'react'

const useCourse = () => {
    const router=useRouter()
    const {id} = router?.query
    console.log(router.query,"query")
   const {Axios}= commonApi({})
    const [course,setCourse] = useState([])
    const [loading,setLoading] = useState(false)
    const getList = async()=>{
        setLoading(true)
        try {
            
            const res = await Axios.post(`course/question/${id}`)
            
            if(res){
                setLoading(false)
                setCourse(res?.data?.courseList)
            }

        } catch (error) {
            setLoading(false)
        }
    }

    // useEffect(() => {
    //   getList()
    // }, [])
    
  return {
    setCourse,
    course,
    loading
  }
}

export default useCourse