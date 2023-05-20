import React from 'react'
import PrivateRoute from '../components/privateRoute/PrivateRoute'
import Course from '../components/course'

const course = (user) => {
  return (
    <Course user={user?.pageProps} />
  )
}

export default course
export const getServerSideProps = PrivateRoute()