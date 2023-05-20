import React, { useEffect, useState } from 'react';
import LayoutWrapper from '../Layout';
import Table from '../../Table/Table';
import axios from 'axios';
import { useDebouncedCallback } from 'use-debounce';
import Input from '../widgets/Input';
import dashColoumn from './coloumn';

const Dashboard = ({user}) => {
  const [setList, SetDataList] = useState([]);
  const [paginator, setPaginator] = useState({});
  const [Open, setOpen] = useState(false);
  const [searchValue,setSearchValue]=useState()
  const [loading ,setLoading]= useState(false)
  
  const getData = async ({ page, limit,value }) => {
    const token = localStorage.getItem('token')
   
    setLoading(true)
    try {
      const payload = {
        options:{
          limit,
          page,
          },
          query:{
            firstName:value||"",
            searchName:["firstName"]
          }
      };
      
      const local= 'http://localhost:2000/user/list'
    const server = 'https://marlo-tech-kytn.vercel.app/user/list'
      const list = await axios.post(server, payload,{headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFmZGQ4NmNlNDZmZWEwMTQ2Yzk2NzYiLCJpYXQiOjE2ODIyNDA2MzMsImV4cCI6MTY4MjI0NDIzM30.T_OpsNvj6kTJkeFgNzSXFmRGcaqW5jwpmgRZxIb5f6Y`
    }});

       const {docs,...rest} = list?.data
       if(list){
        setLoading(false)
        SetDataList(docs);
        setPaginator(rest);
      }
    } catch (error) {
      setLoading(false)
      console.log(error, 'error');
    }
  };

  useEffect(() => {
    getData({ page: 1, limit: 10});
  }, []);

  const onPagination = (page, limit) => {
    getData({ page, limit,searchValue });
  };

  const debounced = useDebouncedCallback(
    // function
    (value) => {
      
      setSearchValue(value)
      
       getData({page:1,limit:3,value });
    },
    // delay in ms
    1000
  );
 
 

  return (
    <LayoutWrapper
    user={user}
      title={
      <>
      <h1>Users</h1>
      <div>
        <Input  onChange={(e)=> debounced(e.target.value)} className="px-2 py-1 text-sm"  placeholder="Search By Firstname"/>
      </div>
      </>
    }
      headerClass="font-bold"
      setIsOpen={true}
      model={
        <>
          <button onClick={() => setOpen(false)}>Close</button>
          
        </>
      }
      // children={
      //     <Table
      //       columns={dashColoumn({setList}).columns}
      //       data={setList}
      //       paginator={paginator}
      //       onPagination={onPagination} 
      //       loading={loading}
      //     />
          
      // }
    >
    <Table
       columns={dashColoumn({setList}).columns}
       data={setList}
       paginator={paginator}
       onPagination={onPagination} 
       loading={loading}
          />
    </LayoutWrapper>
  );
};

export default Dashboard;
