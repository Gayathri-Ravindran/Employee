import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EmployeeForm = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
    };
  return (
    <div>
    <h2>Employee Form</h2>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="name"
      />
      <TextField
        label="Designation"
        variant="outlined"
        fullWidth
        margin="normal"
        name="designation"
      />
      <TextField
        label="Location"
        variant="outlined"
        fullWidth
        margin="normal"
        name="location"
      />
      <TextField
        label="Salary"
        variant="outlined"
        fullWidth
        margin="normal"
        name="salary"
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  </div>
  )
}

export default EmployeeForm