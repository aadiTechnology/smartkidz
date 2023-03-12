import { Box, Button, TextField ,Paper, Grow } from '@mui/material'
import React, { useState } from 'react'
import RegisterApi from '../API/RegisterApi';
import { IsEmailValid, IsMobileNoValid, IsEmpty } from '../Common/Util';
import { useParams } from 'react-router';
import ClassButton from '../Libraries/ClassButton';
import NameTextField from '../Libraries/TextField/NameTextField';


   const Register = () => {
   
    const [checked, setChecked] = useState(true);
    const {Id} = useParams();
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState(false)
    const [birthDate, setBirthDate] = useState('')
    const [birthDateError, setBirthDateError] = useState('')
    const [emailId, setEmailId] = useState('')
    const [emailIdError, setEmailIdError] = useState('')
    const [mobileNoError, setMobileNoError] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const clickSubmit = () => {
        // setFirstNameError(IsEmpty('First Name', firstName))
        // setLastNameError(IsEmpty('Last Name', lastName))
        setBirthDateError(IsEmpty('Birth date', birthDate))
        setEmailIdError(IsEmailValid(emailId))
        console.log(GetClassId())
        setMobileNoError(IsMobileNoValid(mobileNo))
        if (firstNameError &&
            lastNameError &&
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
    const onFirstNameChange = (value) =>{
        setFirstName(value)
    }
    const onLastNameChange = (value) =>{
        setLastName(value)
    }
    const onFirstNameBlur = (value) =>{
        setFirstNameError(value)
    }
    const onLastNameBlur = (value) =>{
        setLastNameError(value)
    }
    return (<Grow in={checked}
        style={{ transformOrigin: '0 0 1' }}
        {...(checked ? { timeout: 1500 } : {})}
    >
        <Box>
            <ClassButton itemList={itemList} clickItem={clickItem}></ClassButton>
           
            <Paper component={Box} p={2}>
            
                <NameTextField
                label="First Name"
                value={firstName}
                onChange={onFirstNameChange}
                onBlur={onFirstNameBlur}
                ></NameTextField>
            
                 <NameTextField
                label="Last Name"
                value={lastName}
                onChange={onLastNameChange}
                onBlur={onLastNameBlur}
                ></NameTextField>
            <TextField  type={'date'} id="outlined-basic" 
                value={birthDate}
                onChange={(e) => { setBirthDate(e.target.value) }}
                onBlur={(e) => { setBirthDateError(IsEmpty('Birth Date', e.target.value)) }}
                error={birthDateError !== ''}
                helperText={birthDateError} />

            <TextField type={'email'} id="outlined-basic" label="Email" 
                value={emailId}
                onChange={(e) => { setEmailId(e.target.value) }}
                onBlur={(e) => { setEmailIdError(IsEmailValid(e.target.value)) }}
                error={emailIdError !== ''}
                helperText={emailIdError} />

            <TextField  type={'number'} id="outlined-basic" label="Mobile" 
                value={mobileNo}
                onChange={(e) => { setMobileNo(e.target.value) }}
                onBlur={(e) => { setMobileNoError(IsMobileNoValid(e.target.value)) }}
                error={mobileNoError !== ''}
                helperText={mobileNoError} />
            <Button  onClick={clickSubmit}  >Submit</Button>
            </Paper>

        </Box>

        </Grow>     
    )
}

export default Register