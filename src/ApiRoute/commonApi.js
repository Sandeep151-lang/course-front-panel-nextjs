
import axios from 'axios'
import React, { useState } from 'react'

const commonApi = () => {
  const local = "http://localhost:2000/"
  const server = 'https://marlo-tech-kytn.vercel.app/'
    const Axios = axios.create({
      baseURL:local,
      headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFmZGQ4NmNlNDZmZWEwMTQ2Yzk2NzYiLCJpYXQiOjE2ODMwNDk4NDcsImV4cCI6MTY4MzA1MzQ0N30.v3Mz8L90xcPZUZv0qNmPR9_6UWOiljYVIjkbIBEJQ70'

    }
    })
    
  return {
    Axios,
   
  }
}

export default commonApi