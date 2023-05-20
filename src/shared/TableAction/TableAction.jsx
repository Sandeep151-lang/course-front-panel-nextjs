import commonApi from '@/ApiRoute/commonApi'
import DeleteIcon from '@/icons/DeleteIcon'
import EditIcon from '@/icons/EditIcon'
import ViewIcon from '@/icons/ViewIcon'
import React from 'react'

const TableAction = ({module,Edit,Delete,View,getList,onClickEdit,children,data,onClickView,paginator}) => {

  return (
    <div className='flex flex-row'>
    {View && <ViewIcon className="mx-1 cursor-pointer" onClick={onClickView}/>}
    {Edit && <EditIcon className="mx-1 cursor-pointer" onClick={onClickEdit}/>}
    {Delete && <DeleteIcon className="mx-1 cursor-pointer"paginator={paginator} getList={getList} id={data?._id} module={module}/>}
    {children}
    </div>
  )
}

export default TableAction