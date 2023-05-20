import React from 'react'
import Login from '../components/Login/index'
import { withSessionSsr } from '../components/lib/config/withSession'

const login = () => {
  return (
    <Login/>
  )
}

export default login
export const getServerSideProps=  withSessionSsr(
  async ({req, res}) => {
      const user = req.session.user;
      if(user) {
        return {
          redirect:{
              destination:"/",
              permanent:false
          }
      }
      }
      return {
          props: {  }
      }
  }
);