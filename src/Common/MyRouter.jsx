import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EnquiryList from '../Component/EnquiryList'
import Register from '../Component/Register'

const MyRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Register/>}></Route>
        <Route exact path='/:Id' element={<Register/>}></Route>
        <Route exact path='/EnquiryList' element={<EnquiryList/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRouter