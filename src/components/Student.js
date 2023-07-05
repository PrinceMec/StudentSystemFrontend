import * as React from 'react';

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [studentFirstName, setStudentFirstName] = useState('')
    const [studentLastName, setStudentLastName] = React.useState('')
    const [studentSchoolName, setStudentSchoolName] = useState('')
    const [studentAddress, setStudentAddress] = React.useState('')


    const handleClick = (e) => {

        const student = { studentFirstName, studentLastName, studentAddress, studentSchoolName }
        console.log(student)

        fetch("https://student-system-backend-12e73bdc6641.herokuapp.com/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New student added")
        })

    }





    return (
        <div className='' style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
            <div className="">
                <h2 style={{ color: "Black", decoration: "none", margin: '20px' }}>ADD STUDENT</h2>
                <form >

                
                    <div class="form-group">
                        <label>First name:</label>
                        <input id="outlined-basic" label="First name" variant="outlined" fullWidth value={studentFirstName}
                            onChange={(e) => setStudentFirstName(e.target.value)} style={{ width: '250px' }} className="form-control mx-sm-3" 
                            />
                    </div>

                    <div class="form-group">
                        <label>Last name:</label>
                        <input id="outlined-basic" label="Last name" variant="outlined" fullWidth value={studentLastName}
                            onChange={(e) => setStudentLastName(e.target.value)} style={{ width: '250px' }} className="form-control mx-sm-3" />
                    </div>

                    <div class="form-group">
                        <label>Address:</label>
                        <input id="outlined-basic" label="Address" variant="outlined" fullWidth value={studentAddress}
                            onChange={(e) => setStudentAddress(e.target.value)} style={{ width: '250px' }} className="form-control mx-sm-3" />
                    </div>

                    <div class="form-group">
                        <label>School name:</label>
                        <input id="outlined-basic" label="School name" variant="outlined" fullWidth value={studentSchoolName}
                            onChange={(e) => setStudentSchoolName(e.target.value)} style={{ width: '250px' }} className="form-control mx-sm-3" />
                    </div>

                    <Link to="/"><button variant="contained" onClick={handleClick} style={{ width: '100px', marginTop: '10px', }} className='btn btn-primary'>ADD</button></Link>

                </form>
            </div>

        </div>





    );
}
