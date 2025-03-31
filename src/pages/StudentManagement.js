import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  fetchStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  uploadFile,
} from "../api/studentService";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import FileUpload from "../components/FileUpload";
import Login from "../components/Login";

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [studentData, setStudentData] = useState({
    ht_no: "",
    name: "",
    email: "",
    branch: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showFileModal, setShowFileModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAdmin(true);
      loadStudents();
    }
  }, []);

  const loadStudents = async () => {
    setLoading(true);
    try {
      const data = await fetchStudents();
      setStudents(data);
    } catch (error) {
      toast.error("Failed to load students.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      toast.error("Please select a file.");
      return;
    }
    try {
      const response = await uploadFile(file);
      toast.success(response.data.message);
      setTimeout(loadStudents, 500); // Small delay to ensure UI updates properly
      setShowFileModal(false);
    } catch (error) {
      toast.error("Error uploading file.");
    }
  };

  const handleAddOrUpdateStudent = async () => {
    if (!studentData.ht_no || !studentData.name || !studentData.email || !studentData.branch) {
      toast.error("All fields are required.");
      return;
    }
    try {
      if (isEditing) {
        await updateStudent(studentData.ht_no, studentData);
        toast.success("Student updated successfully.");
      } else {
        await addStudent(studentData);
        toast.success("Student added successfully.");
      }
      setTimeout(loadStudents, 500);
      resetForm();
    } catch (error) {
      toast.error("Error saving student data.");
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
        toast.success("Student deleted successfully.");
        setTimeout(loadStudents, 500);
      } catch (error) {
        toast.error("Error deleting student.");
      }
    }
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAdmin(false);
  };

  const resetForm = () => {
    setStudentData({ ht_no: "", name: "", email: "", branch: "" });
    setIsEditing(false);
    setShowStudentModal(false);
  };

  if (!isAdmin) {
    return <Login setIsAdmin={setIsAdmin}/>;
  }

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Student Management System</h2>
        <button className="btn btn-danger" onClick={handleAdminLogout}>
          Logout
        </button>
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={() => setShowStudentModal(true)}>
          Add Student
        </button>
        <button className="btn btn-secondary" onClick={() => setShowFileModal(true)}>
          Upload File
        </button>
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <StudentList
          students={students}
          searchQuery={searchQuery}
          handleEditStudent={handleEditStudent}
          handleDeleteStudent={handleDeleteStudent}
        />
      )}

      {/* Student Modal */}
      {showStudentModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isEditing ? "Edit Student" : "Add Student"}</h5>
                <button type="button" className="btn-close" onClick={resetForm}></button>
              </div>
              <div className="modal-body">
                <StudentForm
                  studentData={studentData}
                  setStudentData={setStudentData}
                  handleAddOrUpdateStudent={handleAddOrUpdateStudent}
                  isEditing={isEditing}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* File Upload Modal */}
      {showFileModal && (
        <div className="modal fade show d-block" tabIndex="-1">
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
