import React from "react";

const StudentList = ({ students, searchQuery, handleEditStudent, handleDeleteStudent }) => {
    const filteredStudents = students.filter(student =>
        student.ht_no.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.branch.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>HT Number</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Branch</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.length > 0 ? (
                        filteredStudents.map((student) => (
                            <tr key={student.ht_no}>
                                <td>{student.ht_no}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.branch}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditStudent(student)}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteStudent(student.ht_no)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No students found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
