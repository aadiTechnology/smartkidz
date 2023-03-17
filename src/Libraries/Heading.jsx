import { Typography ,useTheme} from '@mui/material'
import React from 'react'

function Heading({heading}) {
  const theme=useTheme();
  console.log(theme)
  return (
    <div>
      <Typography variant='h1' color="secondary" sx={{textAlign:"center"}}>{heading}</Typography>
    </div>
  )
}

export default Heading
