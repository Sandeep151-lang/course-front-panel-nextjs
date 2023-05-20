import React from 'react'
import PrivateRoute from '../components/privateRoute/PrivateRoute'
import Category from '@/components/category'

const category = (user) => {
  return (
    <Category user={user?.pageProps}/>
  )
}

export default category
export const getServerSideProps = PrivateRoute()