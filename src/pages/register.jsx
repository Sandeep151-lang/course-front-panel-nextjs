import Register from '@/components/Register';
import React from 'react'
import { withSessionSsr } from '@/components/lib/config/withSession';
import PrivateRoute from '@/components/privateRoute/PrivateRoute';

const register = () => {
  return (
    <Register/>
  )
}

export default register
export const getServerSideProps= PrivateRoute()