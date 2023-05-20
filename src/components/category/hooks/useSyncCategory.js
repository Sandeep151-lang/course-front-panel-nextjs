import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import commonApi from '@/ApiRoute/commonApi';

const useSyncCategory = () => {
  const [open,setOpen] = useState(false)
  const [categoryList, setCategoryList] = useState([])
  const [paginator, setPaginator] = useState({})
  const [loading,setLoading]= useState(false)
  const [searchValue,setSearchValue]=useState()

const {Axios}=commonApi({})

  const getCategory = async ({page,limit})=>{
    setLoading(true)
    try {
      const payload={
        options:{
            limit:limit || paginator?.limit,
            page:page || paginator?.page,
            sort:{createdAt:-1},
            },
            query:{
              CategoryName:searchValue || ""
            }
        
    }
    const local= 'http://localhost:2000/category/list'
    const server = 'https://marlo-tech-kytn.vercel.app/ctegory/list'
    //    const data= await axios.post(local,payload,{headers: {
      //     'Content-Type': 'application/json;charset=UTF-8',
      //     "Access-Control-Allow-Origin": "*",
      //     "Authorization":`Bearer ${token}`
      // }})
      const data= await Axios.post('category/list',payload)
      const {docs,...rest} = data?.data
      if(data){
        setCategoryList(docs)
        setPaginator(rest)
        setLoading(false)
      }
    
  } catch{
    setLoading(false)
      
    }
   }

   const onPagination = (page, limit) => {
    getCategory({ 
      page, 
      limit,
      query:{
        CategoryName : searchValue || ""
      }
      });
    };

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      setSearchValue(value)
      getCategory({
        query:{
          CategoryName:searchValue || ""
        }
        
      });
    },
    // delay in ms
    1000
  );

   useEffect(() => {
    getCategory({
       query:{
        CategoryName:searchValue || ""
       }
    })
    }, [searchValue])


   
  return {
    setOpen,
    open,
    categoryList,
    paginator,
    loading,
    onPagination,
    getCategory,
    debounced
    
  }
}

export default useSyncCategory