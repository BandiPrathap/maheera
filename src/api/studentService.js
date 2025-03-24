import axios from "axios";

const API_URL = "https://maheera-woad.vercel.app/students";

export const fetchStudents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error("Error fetching students");
    }
};

export const addStudent = async (studentData) => {
    return await axios.post(API_URL, studentData);
};

export const updateStudent = async (ht_no, studentData) => {
    return await axios.put(`${API_URL}/${ht_no}`, studentData);
};

export const deleteStudent = async (ht_no) => {
    return await axios.delete(`${API_URL}/${ht_no}`);
};

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    
    return await axios.post("https://maheera-woad.vercel.app/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
};
