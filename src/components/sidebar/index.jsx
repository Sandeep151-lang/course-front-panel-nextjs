import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu,ProSidebarProvider } from 'react-pro-sidebar'

import Link from 'next/link'
import Logout from '../Logout'
import Input from '../widgets/Input'
// import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu } from "react-pro-sidebar"

const Sidebars = ({ children, title, headerClass ,user}) => {
  return (
    <ProSidebarProvider>
      <div className="relative flex w-screen h-screen ">
        <Sidebar className="bg-gray-700 flex-none">
          <div className='visible h-16  flex items-center justify-between
                  px-2  py-2 pl-4  sticky top-0 z-10 whitespace-nowrap bg-gray-400 visible'>
            <p className='font-bold text-lg '>Admin Panel</p>
          </div>
          <div className=' overflow-auto'>
          <Menu className=''>
          
            <MenuItem>
              <Link href="/category">Category</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/course">course</Link>
            </MenuItem>  
            <MenuItem>
              <Link href="/dashboard">Users</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/page">Page</Link>
            </MenuItem>
          
            <SubMenu className=' sticky bottom-0  z-10 ' label={user?.name===undefined ?"Admin":`${user?.name} ${user?.lastName}`}>
              <MenuItem>
               <Logout/>
              </MenuItem>
            </SubMenu>
            <MenuItem>
            </MenuItem>
          </Menu>
          </div>
        </Sidebar>
        <div className="relative w-full over-flow-auto   bg-secondary">
          <div
            className={`static h-16 top-0 flex items-center justify-between
                px-2  py-2 pl-4  shadow-sm bg-gray-200 font-bold ${headerClass}`}
          >
            {title}
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </ProSidebarProvider>
  )
}

export default Sidebars
