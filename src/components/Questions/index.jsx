import React from 'react'
import LayoutWrapper from '../Layout'
import useAddQuestion from './hooks/useAddQuestion'

const Question = () => {
  const {courseData}=  useAddQuestion({})
  return (
    <LayoutWrapper 
    
    title={
        <>
            <h1>Add Questions</h1>
            {/* <div className='flex'>
                <Input placeholder="Search By Course" onChange={(e)=>debounced(e.target.value)} className="px-2 py-1"/>
            <div>
                <Button title="Create" className="mt-2 px-2 rounded text-sm" onClick={()=>openModal()}/>
            </div>
            </div>  */}
        </>
        }
    >
      <>
        <div className='h-20 border border-slate-400 rounded-lg bg-slate-200'>
            <div className='p-2 flex justify-between'>
                <div >
                    <p className='text-blue-600/50 font-bold'>Course Name</p>
                    <h3 className='font-bold'>{courseData?.courseName}</h3>
                </div>
                <div>
                    {console.log(courseData?.CategoryName)}
                    <p className='text-blue-600/50 font-bold'>Category Name</p>
                    <h3 className='font-bold'>{courseData?.categoryName?.CategoryName}</h3>
                </div>
                <div/>
                <div/>
            </div>
        </div>

        <div className='h-20 border border-slate-400 rounded-lg bg-slate-200 my-3'>
            
        </div>
        
      </>

    </LayoutWrapper>
  )
}

export default Question