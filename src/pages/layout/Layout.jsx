import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <main className='min-h-[70vh] mt-20'>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default React.memo(Layout)