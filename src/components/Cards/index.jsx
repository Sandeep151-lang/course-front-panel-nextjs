import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../Navbar';
import useCourse from './hooks/useCourse';
import Course from './course';

const Card = ({courseList}) => {
  return (
    <>
        <Navbar/>
        <Course  list={courseList}/>
    </>
  )
}

export default Card