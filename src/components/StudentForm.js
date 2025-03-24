import React from "react";

const StudentForm = ({ studentData, setStudentData, handleAddOrUpdateStudent, isEditing, setIsEditing }) => {
    return (
        <div className="mb-3">
            <h4>{isEditing ? "Edit Student" : "Add New Student"}</h4>
            {Object.keys(studentData).map((key) => (
                <input
                    key={key}
                    type={key === "email" ? "email" : "text"}
                    className="form-control mb-2"
                    placeholder={key.replace("_", " ").toUpperCase()}
                    value={studentData[key]}
                    onChange={(e) => setStudentData({ ...studentData, [key]: e.target.value })}
                />
            ))}
            <button className="btn btn-primary" onClick={handleAddOrUpdateStudent}>
                {isEditing ? "Update Student" : "Add Student"}
            </button>
            {isEditing && (
                <button className="btn btn-secondary ms-2" onClick={() => {
                    setStudentData({ ht_no: "", name: "", email: "", branch: "" });
                    setIsEditing(false);
                }}>
                    Cancel
                </button>
            )}
        </div>
    );
};

export default StudentForm;
