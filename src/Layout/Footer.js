import React from 'react'
import { Paper,Typography,useTheme } from '@mui/material'
function Footer() {
  const theme=useTheme();
  return (
    <div>
    <Paper  sx={{position:"fixed" ,width: "100%",bottom:0}} square>
      <Typography color={theme.palette.success.main}>copyrite</Typography>
      </Paper>
    </div>
  )
}

export default Footer
