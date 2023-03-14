import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Grow, Box } from '@mui/material'
import Drawersidebar from '../Layout/Drawersidebar';
import Header from './Header'
import Footer from './Footer'

function Frontend() {
  const [checked, setChecked] = useState(true);
  return (
    <div>

      <Header />
      <Drawersidebar />
     
      <Container>
     <Outlet />
     </Container>
     <Footer />
    </div>
  )
}

export default Frontend
