import React from 'react'
import { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { useGetUserQuery } from "state/api";
 
const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebaOpen, setIsSidebarOpen] = useState(true);
    const userId = useSelector((state) => state.global.userId);
    const { data } = useGetUserQuery(userId);


  return (
    <Box display={isNonMobile ? "Flex" : "block" } width='100%' height='100%'>
        <Sidebar isNonMobile={isNonMobile} drawerWidth='250px' isSidebarOpen={isSidebaOpen}
        setIsSidebarOpen = {setIsSidebarOpen} user = {data || {}}
        />
        <Box flexGrow={1}>
            <Navbar
            isSidebarOpen={isSidebaOpen}
            setIsSidebarOpen = {setIsSidebarOpen}
            user = {data || {}}/>
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout