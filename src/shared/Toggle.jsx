import React from 'react'
import Switch from "react-switch";
import Toaster from './Toaster';
import commonApi from '@/ApiRoute/commonApi';

const Toggle = ({module,original,getList,paginator}) => {
  console.log(paginator)
    const [isActive, setIsActive] = React.useState(original?.isActive)

    const {Axios}=commonApi()
    const handleActive=async(e)=>{
        const payload={
            isActive:!isActive
        }
      try {
        const data = await Axios.put(`${module}/${original?._id}`,payload)
        if(data){
          setIsActive(!isActive)
          Toaster('success',data?.data?.message)
          getList({
            page:paginator?.page || 1,
            limit:paginator?.limit || 10,
            query : {
              courseName : ""
            }
          })    
        }
       
      } catch (error) {
        console.log(error)
      }
    }
    
  return (
        <Switch 
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
        onChange={(e)=>handleActive(e)}  
        checked={isActive} 
        />
  )
}

export default Toggle