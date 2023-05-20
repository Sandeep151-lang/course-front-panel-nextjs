import React from 'react'
import Switch from "react-switch";
import Toaster from './Toaster';
import commonApi from '@/ApiRoute/commonApi';

const PublishToggle = ({module,original={original}}) => {
    const [isActive, setIsActive] = React.useState(original?.isDefault)

    const {Axios}=commonApi()

    const handleActive=async(e)=>{
        const payload={
            isDefault:!isActive
        }
      try {
        const data = await Axios.put(`${module}/${original?._id}`,payload)
       setIsActive(!isActive)
       Toaster('success',data?.data?.message)
       
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

export default PublishToggle