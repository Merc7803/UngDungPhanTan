import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { register } from '../../ReduxToolkit/AuthSlice';

const Signup = ({ togglePanel }) => {
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData))
    console.log("login form", formData)
  }
  return (
    <div >
      <h1 className='text-lg font-bold text-center pb-8 ' style={{ marginTop: '20px' }}>Register</h1>
      <form className='space-y-3' onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder='Enter your full name...'
          sx={{
            input: { color: 'black' },
            '& .MuiInputLabel-root': { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#b3b3b3' },
              '&:hover fieldset': { borderColor: 'black' },
              '&.Mui-focused fieldset': { borderColor: 'black' },
            },
          }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email...'
          sx={{
            input: { color: 'black' },
            '& .MuiInputLabel-root': { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#b3b3b3' },
              '&:hover fieldset': { borderColor: 'black' },
              '&.Mui-focused fieldset': { borderColor: 'black' },
            },
          }}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter your password...'
          sx={{
            input: { color: 'black' },
            '& .MuiInputLabel-root': { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#b3b3b3' },
              '&:hover fieldset': { borderColor: 'black' },
              '&.Mui-focused fieldset': { borderColor: 'black' },
            },
          }}
        />
        <FormControl
          fullWidth
          sx={{
            '& .MuiInputLabel-root': { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#b3b3b3' },
              '&:hover fieldset': { borderColor: 'black' },
              '&.Mui-focused fieldset': { borderColor: 'black' },
            },
            '& .MuiSelect-icon': {
              color: 'black',
            },
            '& .MuiSelect-select': {
              color: 'black', 
            },
            // '& .MuiSelect-root': { color: 'black' },
          }}
        >
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.role}
            label="Role"
            name='role'
            onChange={handleChange}
          >
            <MenuItem value={"ROLE_CUSTOMER"}>USER</MenuItem>
            <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>
          </Select>
        </FormControl>
        <div >
          <Button fullWidth
            className='customeButton'
            type='submit'
            sx={{ padding: ".9rem" }}>
            Register
          </Button>
        </div>
      </form>
      <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
        <span>Already have an account?</span>
        <Button onClick={togglePanel}>Signin</Button>
      </div>
    </div>
  )
}

export default Signup