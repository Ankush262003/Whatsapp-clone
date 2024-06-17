import React from 'react'
import MButton from '@mui/material/Button'

const Button = (props) => {
  return <MButton variant="contained" {...props}/>
}

export default React.memo(Button);