import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var[inputs,setinputs]=useState({name:"",age:"",dept:"",salary:""})
  var navigate=useNavigate()
  var location=useLocation()
  console.log(location.state)



  const inputHandler=(e)=>{
    setinputs({...inputs,[e.target.name]:e.target.value});
    console.log(inputs);
  }


  const AddHandler=()=>{
    if(location.state !== null){ //if not null(texboxes) then update is called
        axios.put("http://localhost:3005/edit/"+location.state.val._id,inputs)
        .then((res)=>{
            console.log(res)
            alert(res.data.message)
            navigate('/view')
        })
        .catch((err)=>{
            console.log(err)


        })
    }else{
      axios.post("http://localhost:3005/add",inputs)
      .then((res)=>{
          console.log(res)
            alert(res.data.message)
            navigate('/')
    
    
    
      })
      .catch((err)=>{
          console.log(err)
    
      })
    
    }



  }
   
  useEffect(()=>{
        if(location.state !==null)
            setinputs({
                ...inputs,
                name:location.state.val.name,
                age:location.state.val.age,
                dept:location.state.val.dept,
                salary:location.state.val.salary
          
            })

  },[])
 

  return (
    <div>
        <br />
        <br />
      <TextField variant='filled' label='name' onChange={inputHandler} name='name' value={inputs.name}>Name</TextField>
      <br /> <br />
        <TextField variant='filled' label='age' onChange={inputHandler} name='age' value={inputs.age}>Age</TextField>
        <br /><br />
        <TextField variant='filled' label='dept'onChange={inputHandler} name='dept' value={inputs.dept}>Department</TextField>
        <br /><br />
        <TextField variant='filled' label='salary' onChange={inputHandler} name='salary' value={inputs.salary}>Salary</TextField>
        <br /><br />
        <Button variant='contained' color='success' onClick={AddHandler}>Submit</Button>
    </div>
  )
}

export default Add
