
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function EditStudent() {
    const location = useLocation();
    const student = location.state?.student; // Access the student object from the state
    const [studentFirstName, setStudentFirstName] = useState(student.studentFirstName)
    const [studentLastName, setStudentLastName] = React.useState(student.studentLastName)
    const [studentSchoolName, setStudentSchoolName] = useState(student.studentSchoolName)
    const [studentAddress, setStudentAddress] = React.useState(student.studentAddress)
    const [studentId, setStudentId] = React.useState(student.studentId)

    if (!student) {
        return <div>No student data found.</div>;
    }

    const handleClick=(e)=> {
        const student={studentId, studentFirstName, studentLastName, studentAddress, studentSchoolName}
        console.log(student)

        fetch("https://student-system-backend-12e73bdc6641.herokuapp.com/student/update", {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("Student updated")
        })
    }
    

    return (
        <Container style={{marginTop:'30px'}}>
            <Paper elevation={3} >
                <h2 style={{ color: "Black", decoration:"none", margin:'20px' }}>EDIT STUDENT</h2>
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

                    <Link to="/"><Button variant="contained" onClick={handleClick} style={{width:'100px', marginTop:'10px'}} className='btn btn-primary'>UPDATE</Button></Link>
                    <br></br>
                    <br></br>
                </Box>

            </Paper>

                    


        </Container>
    );
}
