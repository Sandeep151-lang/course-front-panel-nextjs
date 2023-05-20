import React from 'react'
import Button from '../components/widgets/Button'
import { useRouter } from 'next/router'

const ErrorPage = () => {
    const router = useRouter()
  return (
    <div className='errorPage'>
    <div className=' items-stretch errorPage-header'> 
    <p className='subpixel-antialiased text-5xl font-extrabold py-3 pr-2 sorryPage my-2'> 404  Sorry Not Found</p>
    <Button title="Back to home "className="bg-sky-500/100 px-4 py-2 text-white rounded-full ms-2.5 butn-page font-semibold" onClick={()=>router.push('/')} />
    </div>
    </div>
  )
}

export default ErrorPage