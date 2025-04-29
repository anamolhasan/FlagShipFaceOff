import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <div className='min-h-[calc(100vh-117px)] py-8'>
           <div className='max-w-screen-2xl py-10 mx-auto px-8 md:px-12 lg:px-16 xl:px-24'> 
              <Outlet />
           </div>
         </div>
        <Footer />
    </div>
  )
}

export default MainLayout