import { Container, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import RegisterApi from '../API/RegisterApi'

const EnquiryList = () => {
    const [enquiryList, setEnquiryList] = useState([])
    useEffect(()=>{
        // setEnquiryList(RegisterApi.GetEnquiryList())
        axios.get(`http://localhost:44315/getEnquiryList`)
      .then(res => {
        setEnquiryList(res.data);
      })

    },[])
    console.log("aa -- ",enquiryList)
    const nav = useNavigate()
    const clickNav=(value)=>{
        nav('/'+value)
    }
  return (
    <Container>EnquiryList

        <Grid container>
            {enquiryList.length >0 ? enquiryList?.map((item,i)=>{
                return (<>
                <Grid item xs={6} onClick={()=>{clickNav(item.Id)}}>
                    {item.FirstName + ' ' + item.LastName}
                </Grid>
                <Grid item xs={6}>
                    {item.BirthDate}
                </Grid>
                <Grid item xs={6}>
                    {item.EmailId}
                </Grid>
                <Grid item xs={6}>
                    {item.MobileNo}
                </Grid>
                </>)
            }):null}
        </Grid>
    </Container>
  )
}

export default EnquiryList