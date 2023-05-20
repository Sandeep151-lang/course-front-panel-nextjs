
import axios from 'axios'
import React, { useState } from 'react'

const commonApi = () => {
  const local = "http://localhost:2000/"
  const server = 'https://marlo-tech-kytn.vercel.app/'
    const Axios = axios.create({
      baseURL:local,
      headers: {'Authorization': 'Bearer'

    }
    })
    
  return {
    Axios,
   
  }
}

export default commonApi