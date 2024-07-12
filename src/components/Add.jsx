import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br />
        <br />
      <TextField variant='filled' label='name'>Name</TextField>
      <br /> <br />
        <TextField variant='filled' label='age'>Age</TextField>
        <br /><br />
        <TextField variant='filled' label='dept'>Department</TextField>
        <br /><br />
        <TextField variant='filled' label='salary'>Salary</TextField>
        <br /><br />
        <Button variant='contained' color='success'>Submit</Button>
    </div>
  )
}

export default Add
