import React from 'react'
import { Outlet } from 'react-router-dom'
import {Stack} from "@mui/material"
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
const AppLayout = () => {
  return (<>
    <Stack>
      <Header/>
      <Outlet/>
      <Footer/>
    </Stack>
  </>)
}

export default AppLayout