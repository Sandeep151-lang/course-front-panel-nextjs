import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDebouncedCallback } from 'use-debounce'
import commonApi from '@/ApiRoute/commonApi'

const useSyncCourse = ({open}) => {
    const [category,setCategory]= useState([])
    const [loading, setLoading]= useState(false)
    const [searchValue,setSearchValue]= useState()
    const [courseSearch,setCourseSearch]=useState()
    const [courseData,setCourseData] = useState([])
    const [paginator, setPaginator] = useState({})

const {Axios}=commonApi({})

const courseList = async(props)=>{
  const {page,limit,offset,query} = props
  try {
    const payload={
      options:{
        page:page || 1,
        limit:limit || 10,
        sort:{createdAt:-1},
        populate : 'categoryName',
      },
      query,
      
    }
    // const local= 'http://localhost:2000/course/list'
    // const server = 'https://marlo-tech-kytn.vercel.app/course/list'
    setLoading(true)
    const data = await Axios.post(`course/list`,payload)
    const {docs,...rest} = data?.data
    if(data){
      setPaginator(rest)
      setCourseData(docs)
      setLoading(false)
}
   
  } catch (error) {
    setLoading(false)
  }
}

const onPagination = (page, limit) => {
  courseList({ 
    page,
    limit,
    query:{
      courseName:courseSearch || ""
    }
    })
  };


  const getData = useDebouncedCallback(async (inputValue)=>{
        setLoading(true)
        try {
          const payload={
            options:{
                limit:10,
                page:1,
                sort:{createdAt:-1}
                },
                query:{
                  CategoryName :inputValue || " "
                 }
    
        }
        
       
        setLoading(false)
        
        const server = 'https://marlo-tech-kytn.vercel.app/ctegory/list'
    const data= await Axios.post(`category/list`,payload)
       const {docs,...rest} = data?.data
      
      const categoryList = docs.map((item)=>({value:item?._id,label:item?.CategoryName}))
      setCategory(categoryList)      
      } catch (error) {
        setLoading(false)
        }
       },
       500
  )


  
       useEffect(()=>{
        if(open){
          getData()
        }
        
        },[open])


    const onSubmit=async(values)=>{
          setLoading(false)
           try {
            const payload={
              categoryName:values?.categoryName?.value,
              ...values
          }
          delete payload.CategoryNm

          // const server = 'https://marlo-tech-kytn.vercel.app/course/create'
          const result = await Axios[data?._id ? "put" : "post"](`course/${data?._id ? `update/${data?._id}`: "create"}`,payload) 
          if(result){

            setOpen(false)
            courseList({ 
              page:1,
              limit:10,
              query:{
                courseName: ""
              }
              })
            reset({...defaultValue})
          } 
          
         
           } catch  {
            setLoading(false)
           }
  }


    const debounced = useDebouncedCallback(
      // function
      (value) => {
        setCourseSearch(value)
        courseList({
          page:paginator?.page || 1,
          limit:paginator?.limit || 10,
          
           query:{
            courseName:value || ""
          }
          
        });
      },
      // delay in ms
      1000
    );
       
        
        useEffect(()=>{
            courseList({
              page:paginator?.page || 1,
              limit:paginator?.page || 10,
              query:{
              courseName:courseSearch || ""
            }
          })
        },[courseSearch])

      //   useEffect(()=>{
      //     courseList({
      //       options:{
      //         limit:paginator?.limit
      //       },   
      //       query:{
      //       courseName:courseSearch || ""
      //     }
      //   })
      // },[])

    
  return {
    courseData,
    onPagination,
    category,
    loading,
    getData,
    setSearchValue,
    onSubmit,
    paginator,
    courseList,
    debounced,
    getData,
    category


  }
}

export default useSyncCourse