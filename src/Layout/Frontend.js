import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import { Container,Grow } from '@mui/material'

import Header from './Header'
import Footer from './Footer'

function Frontend() {
    const [checked, setChecked] = useState(true);
  return (
    <div>
      
      <Header/>
      <Container>
    
      <Outlet/>
    
      </Container>
     
      <Footer/>
    </div>
  )
}

export default Frontend
