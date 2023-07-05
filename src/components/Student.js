import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [studentFirstName, setStudentFirstName] = useState('')
    const [studentLastName, setStudentLastName] = React.useState('')
    const [studentSchoolName, setStudentSchoolName] = useState('')
    const [studentAddress, setStudentAddress] = React.useState('')
    

    const handleClick=(e)=> {
        
        const student={studentFirstName, studentLastName, studentAddress, studentSchoolName}
        console.log(student)

        fetch("https://student-system-backend-12e73bdc6641.herokuapp.com/student/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New student added")
        })

    }

    



    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "Black", decoration:"none" }}>Add Student</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField id="outlined-basic" label="First name" variant="outlined" fullWidth value={studentFirstName}
                        onChange={(e) => setStudentFirstName(e.target.value)} style={{width:'250px'}}/>

                    <TextField id="outlined-basic" label="Last name" variant="outlined" fullWidth value={studentLastName}
                        onChange={(e) => setStudentLastName(e.target.value)} style={{width:'250px'}}/><br></br>

                    <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth value={studentAddress}
                        onChange={(e) => setStudentAddress(e.target.value)} style={{width:'250px'}}/>

                    <TextField id="outlined-basic" label="School name" variant="outlined" fullWidth value={studentSchoolName}
                        onChange={(e) => setStudentSchoolName(e.target.value)} style={{width:'250px'}}/><br></br>

                    <Link to="/"><Button variant="contained" onClick={handleClick} style={{width:'100px', marginTop:'10px',}} className='btn btn-primary'>ADD</Button></Link>
                </Box>

            </Paper>

                    


        </Container>
    );
}
