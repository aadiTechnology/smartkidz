import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EnquiryList from '../Component/EnquiryList'
import Register from '../Component/Register'
import Frontend from '../Layout/Frontend';

const MyRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/:Id' element={<Register/>}></Route>
        <Route path="/" element={<Frontend/>} >
        <Route exact index element={<Register/>}></Route>
        <Route exact path='/EnquiryList' element={<EnquiryList/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRouter