import { TextField, Typography,Box } from '@mui/material'
import React, { useState } from 'react'
import { flexBetween } from '../../CommonStyle'
const NameTextField = ({label, value, onChange, onBlur}) => {
    const [firstNameError, setFirstNameError] = useState('')
    const onFirstNameBlur = (e) =>{
        let isError = !value 
        setFirstNameError(isError?label + ' should not be blank.':'')
        onBlur(isError)
    }
  return (
    <>
      <TextField  id="outlined-basic" label={label}
               value={value}
                onChange={(e) => { onChange(e.target.value) }}
                onBlur={onFirstNameBlur}
                error={firstNameError !== ''}
                helperText={firstNameError} />

                <Box sx={flexBetween}>
                  <Typography>vndjsvn</Typography>
                  <Typography>vndjsvn</Typography>
                </Box>
    </>
  )
}

export default NameTextField
