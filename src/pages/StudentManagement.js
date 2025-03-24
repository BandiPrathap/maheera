import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchStudents, addStudent, updateStudent, deleteStudent, uploadFile } from "../api/studentService";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import FileUpload from "../components/FileUpload";

const StudentManagement = () => {
    const [students, setStudents] = useState([]);
    const [studentData, setStudentData] = useState({ ht_no: "", name: "", email: "", branch: "" });
    const [searchQuery, setSearchQuery] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showStudentModal, setShowStudentModal] = useState(false);
    const [showFileModal, setShowFileModal] = useState(false);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        setLoading(true);
        try {
            const data = await fetchStudents();
            setStudents(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async () => {
        if (!file) {
            toast.error("Please select a file");
            return;
        }
        try {
            const response = await uploadFile(file);
            toast.success(response.data.message);
            loadStudents();
            setShowFileModal(false);
        } catch (error) {
            toast.error("Error uploading file");
        }
    };

    const handleAddOrUpdateStudent = async () => {
        if (!studentData.ht_no || !studentData.name || !studentData.email || !studentData.branch) {
            toast.error("All fields are required");
            return;
        }
        try {
            if (isEditing) {
                await updateStudent(studentData.ht_no, studentData);
                toast.success("Student updated successfully");
            } else {
                await addStudent(studentData);
                toast.success("Student added successfully");
            }
            loadStudents();
            setStudentData({ ht_no: "", name: "", email: "", branch: "" });
            setIsEditing(false);
            setShowStudentModal(false);
        } catch (error) {
            toast.error("Error saving student data");
        }
    };

    const handleEditStudent = (student) => {
        setStudentData(student);
        setIsEditing(true);
        setShowStudentModal(true);
    };

    const handleDeleteStudent = async (ht_no) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            try {
                await deleteStudent(ht_no);
                toast.success("Student deleted successfully");
                loadStudents();
            } catch (error) {
                toast.error("Error deleting student");
            }
        }
    };

    return (
        <div className="container mt-4">
            <ToastContainer />
            <h2 className="mb-3">Student Management System</h2>
            <input type="text" className="form-control mb-3" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button className="btn btn-primary me-2 mb-2" onClick={() => setShowStudentModal(true)}>Add Student</button>
            <button className="btn btn-secondary me-3 mb-2" onClick={() => setShowFileModal(true)}>Upload File</button>
            
            {loading ? <div className="spinner-border"></div> : <StudentList {...{ students, searchQuery, handleEditStudent, handleDeleteStudent }} />}
            
            {/* Student Modal */}
            {showStudentModal && (
                <div className="modal d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{isEditing ? "Edit Student" : "Add Student"}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowStudentModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <StudentForm {...{ studentData, setStudentData, handleAddOrUpdateStudent, isEditing, setIsEditing }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* File Upload Modal */}
            {showFileModal && (
                <div className="modal d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Upload File</h5>
                                <button type="button" className="btn-close" onClick={() => setShowFileModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <FileUpload setFile={setFile} handleFileUpload={handleFileUpload} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentManagement;