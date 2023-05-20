import commonApi from '@/ApiRoute/commonApi'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useAddQuestion = () => {
    const router = useRouter()
    const [courseData , setCourseData] = useState()
    const [loading,setLoading] = useState(false)

  const {Axios} =  commonApi()
    const courseList = async()=>{
        
        setLoading(true)
        try {
            setLoading(false)
            const list =await Axios.post(`course/question/${router?.query?.courseId}`)
            setCourseData(list?.data?.courseList)
        } catch (error) {
            setLoading(false)
            
        }
        
    }

    useEffect(()=>{
        courseList()
    },[router?.query?.courseId])

  return {
    courseData
  }
}

export default useAddQuestion