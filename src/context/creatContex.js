import React ,{createContext} from 'react'

const creatContex = () => {
   const contextApi = createContext()
  return {
    contextApi
  }
}

export default creatContex