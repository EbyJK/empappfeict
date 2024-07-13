import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  var[emp,setemp]=useState([])
  var navigate =useNavigate()


  useEffect(()=>{
    axios.get("http://localhost:3005/view")
  .then((res)=>{
      console.log(res.data)
      setemp(res.data)
  })
  .catch((err)=>{console.log(err);})
  },[])
  const delvalue = (id)=>{
    console.log(id);
    axios.delete("http://localhost:3005/remove/"+id)
    .then((res)=>{
      alert(res.data.message)
      window.location.reload()
    })
     .catch((err)=>{
      console.log(err) // refresh the page
    })
  }
  const updatevalue =(val)=>{
          console.log("update clicked");
          navigate("/add",{state : { val }});
  }
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>AGE</TableCell>
                        <TableCell>DEPARTMENT</TableCell>
                        <TableCell>SALARY</TableCell>
                      
                        
                </TableRow>
            </TableHead>
            <TableBody>
              {emp.map((val,i)=>{
                  return(

              
                <TableRow>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.age}</TableCell>
                    <TableCell>{val.dept}</TableCell>
                    <TableCell>{val.salary}</TableCell>
                    <TableCell>
                    <Button variant="contained" color='error' onClick={()=>{delvalue((val._id))}}>Delete</Button></TableCell>
                    <TableCell><Button variant="contained" color='success' onClick={()=>{updatevalue((val))}}>Update</Button>
                    </TableCell>
                    
                </TableRow>
              )})}
            </TableBody>
        </Table>

      </TableContainer>
    </div>
  )
}

export default View
