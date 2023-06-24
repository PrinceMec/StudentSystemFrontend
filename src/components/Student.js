import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [studentName, setStudentName] = useState('')
    const [studentAddress, setStudentAddress] = React.useState('')
    const[students, setStudents] = useState([])

    const handleClick=(e)=> {
        e.preventDefault()
        const student={studentName, studentAddress}
        console.log(student)

        fetch("http://localhost:8080/student/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New student added")
        })

    }

    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setStudents(result);
        })
    }, [])



    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "Black", decoration:"none" }}><u>Add Student</u></h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth value={studentName}
                        onChange={(e) => setStudentName(e.target.value)} />

                    <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth value={studentAddress}
                        onChange={(e) => setStudentAddress(e.target.value)} />
                    <Button variant="contained" onClick={handleClick}>Submit</Button>
                </Box>

            </Paper>

                    <Paper elevation={3} style={paperStyle}>
                    {students.map(student=>(
                        <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.studentId}>
                            Id: {student.studentId}<br/>
                            Name: {student.studentName}<br/>
                            Address: {student.studentAddress}<br/>
                        </Paper>
                    ))}
                    </Paper>


        </Container>
    );
}
