import React, { useState, useEffect } from "react";

import { Link, useNavigate } from 'react-router-dom';

export default function StudentList() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://student-system-backend-12e73bdc6641.herokuapp.com/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            });
    }, []);

    const handleDelete = (studentId) => {
        fetch(`https://student-system-backend-12e73bdc6641.herokuapp.com/student/delete/${studentId}`, {
            method: 'DELETE'
        })
            .then(() => {
                // Update the state locally to remove the deleted student
                setStudents(students => students.filter(student => student.studentId !== studentId));
            })
            .catch(error => {
                // Handle any errors that may occur during the fetch request
                console.error('Error deleting student:', error);
            });
    };

    const handleEdit = (studentId) => {
        // Find the selected student
        const selectedStudent = students.find(student => student.studentId === studentId);

        // Navigate to the EditStudent page with the selected student as state
        navigate(`/edit-student/${studentId}`, { state: { student: selectedStudent } });
    };

    return (
        <div className="container" >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 className='mt-5'>List of students</h2>
                <Link to="/add-student"><button className="btn btn-primary mt-5" color="primary" style={{ width: '200px' }}>ADD STUDENT</button></Link>
            </div>


            {students.map(student => (
                <div style={{ margin: "10px", padding: "15px", textAlign: "left", backgroundColor: '#ededed', borderRadius: '10px' }} key={student.studentId}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ marginBottom: '0px' }}><b>First Name:</b> {student.studentFirstName}</p>
                        <div style={{ marginBottom: '0px' }}>

                            <button class="btn btn-secondary" style={{ width: '100px' }} onClick={() => handleEdit(student.studentId)}>EDIT</button>

                            <button class="btn btn-danger"  style={{ width: '100px', marginLeft:'10px' }} onClick={() => handleDelete(student.studentId)}>DELETE</button>
                        </div>
                    </div>
                    <p><b>Last Name:</b> {student.studentLastName}<br /></p>
                    <p><b>Address:</b> {student.studentAddress}<br /></p>
                    <p><b>School Name: </b>{student.studentSchoolName}<br /></p>
                </div>
            ))}
        </div>
    );
}
