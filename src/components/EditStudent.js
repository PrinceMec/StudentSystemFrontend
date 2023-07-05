import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

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

    const handleClick = (e) => {
        const student = { studentId, studentFirstName, studentLastName, studentAddress, studentSchoolName }
        console.log(student)

        fetch("https://student-system-backend-12e73bdc6641.herokuapp.com/student/update", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("Student updated")
        })
    }


    return (
        <div className='' style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
            <div className="">
                <h2 style={{ color: "Black", decoration: "none", margin: '20px' }}>EDIT STUDENT</h2>
                <form >
                    <div class="form-group">
                        <label>First name:</label>
                        <input id="outlined-basic" label="First name" className="form-control mx-sm-3" fullWidth value={studentFirstName}
                            onChange={(e) => setStudentFirstName(e.target.value)} style={{ width: '350px' }}
                            placeholder="Firstname" />
                    </div>

                    <div class="form-group">
                        <label>Last name:</label>
                        <input id="outlined-basic" label="Last name" variant="outlined" fullWidth value={studentLastName}
                            onChange={(e) => setStudentLastName(e.target.value)} style={{ width: '350px' }} className="form-control mx-sm-3"
                            placeholder="Lastname" />
                    </div>

                    <div class="form-group">
                        <label>Address:</label>
                        <input id="outlined-basic" label="Address" fullWidth value={studentAddress}
                            onChange={(e) => setStudentAddress(e.target.value)} style={{ width: '350px' }} className="form-control mx-sm-3"
                            placeholder="Address" />
                    </div>
                    <label>School name:</label>
                    <div class="form-group" style={{}}>

                        <input id="outlined-basic" label="School name" variant="outlined" fullWidth value={studentSchoolName}
                            onChange={(e) => setStudentSchoolName(e.target.value)} style={{ width: '350px' }} className="form-control mx-sm-3"
                            placeholder="School name" />
                    </div>




                    <Link to="/"><button variant="contained" onClick={handleClick} style={{ width: '100px', marginTop: '10px' }} className='btn btn-primary'>UPDATE</button></Link>
                </form>
                <br></br>
                <br></br>
            </div>

        </div>





    );
}
