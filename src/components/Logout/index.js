import React from 'react'
import Button from '../widgets/Button'
import { useRouter } from 'next/router'

const Logout = () => {
    const router = useRouter()
const logout=()=>{
    const resp =  fetch("/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      if(resp){
        router.push('/login')
      }
}
  return (
    <Button title="Logout" onClick={logout}/>
  )
}

export default Logout