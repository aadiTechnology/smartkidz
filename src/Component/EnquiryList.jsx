import { Container, Grid, Grow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import RegisterApi from '../API/RegisterApi'

const EnquiryList = () => {
    const [checked, setChecked] = useState(true);
    const [enquiryList, setEnquiryList] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:44315/getEnquiryList`)
      .then(res => {
        setEnquiryList(res.data);
      })

    },[])
    const nav = useNavigate()
    const clickNav=(value)=>{
        nav('/'+value)
    }
  return (<Grow in={checked}
    style={{ transformOrigin: '0 0 1' }}
    {...(checked ? { timeout: 1500 } : {})}
>
    <Container>EnquiryList

        <Grid container>
            {enquiryList.length >0 ? enquiryList?.map((item,i)=>{
                return (<Grid container key={i}>
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
                    </Grid></Grid>)
            }):null}
        </Grid>
    </Container></Grow>
  )
}

export default EnquiryList