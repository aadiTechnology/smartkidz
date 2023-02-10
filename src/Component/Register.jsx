import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import RegisterApi from '../API/RegisterApi';
import { IsEmailValid, IsMobileNoValid, IsEmpty } from '../Common/Util';
import { useParams } from 'react-router';

import ClassButton from '../Libraries/ClassButton';
import { internal_processStyles } from '@mui/styled-engine';
const Register = () => {
    const {Id} = useParams();
    console.log(Id,"Id")
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [birthDateError, setBirthDateError] = useState('')
    const [emailId, setEmailId] = useState('')
    const [emailIdError, setEmailIdError] = useState('')
    const [mobileNoError, setMobileNoError] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const clickSubmit = () => {
        setFirstNameError(IsEmpty('First Name', firstName))
        setLastNameError(IsEmpty('Last Name', lastName))
        setBirthDateError(IsEmpty('Birth date', birthDate))
        setEmailIdError(IsEmailValid(emailId))
        console.log(GetClassId())
        setMobileNoError(IsMobileNoValid(mobileNo))
        if (firstNameError === '' &&
            lastNameError === '' &&
            birthDateError === '' &&
            emailIdError === '' &&
            mobileNoError === '' &&
            parseInt(GetClassId()) >0
        ) {
            const AddEnquiryListBody = {
                FirstName: firstName,
                LastName: lastName,
                BirthDate: birthDate,
                EmailId: emailId,
                MobileNo: mobileNo,
                ClassId: GetClassId()
            }
            RegisterApi.AddEnquiryList(AddEnquiryListBody)
            ResetForm();
        }
    }
    const GetClassId = () => {
        let selectedItem = itemList.filter((item)=> item.IsActive)
        console.log("er",selectedItem)
        if(selectedItem.length>0)
        return selectedItem[0].Value
        else 
        return 0
    }
    const ResetForm= () => {
        setFirstName('')
        setLastName('')
        setBirthDate('')
        setEmailId('')
        setMobileNo('')
        setItemList(itemList.map((item) => {
            return { ...item, IsActive: false }
        }))
    }
    const clickItem = (value) => {
        setItemList(value)
    }
    const [itemList, setItemList] = useState([
        { Id: "1", Name: "Play Group", Value: "1", IsActive: false },
        { Id: "2", Name: "Nursery", Value: "2", IsActive: false },
        { Id: "3", Name: "Jr. K.G.", Value: "3", IsActive: false },
        { Id: "4", Name: "Sr. K.G.", Value: "4", IsActive: false },
        { Id: "5", Name: "Day Care", Value: "5", IsActive: false },
    ])
    return (
        <Box>
            <ClassButton itemList={itemList} clickItem={clickItem}></ClassButton>
            <TextField id="outlined-basic" label="First Name" variant="outlined"
            value={firstName}
                onChange={(e) => { setFirstName(e.target.value) }}
                onBlur={(e) => { setFirstNameError(IsEmpty('First Name', e.target.value)) }}
                error={firstNameError !== ''}
                helperText={firstNameError} />
            <TextField id="outlined-basic" label="Last Name" variant="outlined"
            value={lastName}
                onChange={(e) => { setLastName(e.target.value) }}
                onBlur={(e) => { setLastNameError(IsEmpty('Last Name', e.target.value)) }}
                error={lastNameError !== ''}
                helperText={lastNameError} />
            <TextField type={'date'} id="outlined-basic" variant="outlined"
            value={birthDate}
                onChange={(e) => { setBirthDate(e.target.value) }}
                onBlur={(e) => { setBirthDateError(IsEmpty('Birth Date', e.target.value)) }}
                error={birthDateError !== ''}
                helperText={birthDateError} />

            <TextField type={'email'} id="outlined-basic" label="Email" variant="outlined"
            value={emailId}
                onChange={(e) => { setEmailId(e.target.value) }}
                onBlur={(e) => { setEmailIdError(IsEmailValid(e.target.value)) }}
                error={emailIdError !== ''}
                helperText={emailIdError} />

            <TextField type={'number'} id="outlined-basic" label="Mobile" variant="outlined"
            value={mobileNo}
                onChange={(e) => { setMobileNo(e.target.value) }}
                onBlur={(e) => { setMobileNoError(IsMobileNoValid(e.target.value)) }}
                error={mobileNoError !== ''}
                helperText={mobileNoError} />
            <Button variant="contained" onClick={clickSubmit}   >Submit</Button>
        </Box>
    )
}

export default Register