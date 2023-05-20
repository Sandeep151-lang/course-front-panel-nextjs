import Card from '@/components/Cards'
import { useRouter } from 'next/router'
import React from 'react'

const card = ({courseList}) => {
  return (
    <Card courseList={courseList}/>
  )
}

export default card

export async function getServerSideProps({params}) {
  const {id ,_id}= params
  
  const resp = await fetch(`http://localhost:2000/course/user-course/${id ||_id}`);
  
  const courseList = await resp.json()

  return { props: { courseList } }
}
