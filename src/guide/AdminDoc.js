import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faUserGraduate,
  faCalendarAlt,
  faUsers,
  faPlus,
  faUpload,
  faEdit,
  faTrash,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const AdminDoc = () => {
  return (
    <div className="container py-4 mb-0">
      <h2 className='text-center' style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Chatbot Management Platform Guide
      </h2>
      <hr className='mt-0'></hr>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1. Introduction</h3>
      <div className="mb-4">
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          This platform provides college administrators with tools to manage a student query chatbot and interact with student data.
        </p>
        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>1.1. Purpose</h4>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          The platform aims to simplify student query management, ensuring timely and accurate information.
        </p>
        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>1.2. Target Audience</h4>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Designed for college administrators and support staff.
        </p>
      </div>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>2. Home Page</h3>
      <div className="mb-4">
        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>2.1. Main Interface</h4>
        <ul className="list-group">
          <li className="list-group-item" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <FontAwesomeIcon icon={faRobot} className="text-info me-2" />
            <strong>Chatbot:</strong> Configure and train the chatbot.
          </li>
          <li className="list-group-item" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <FontAwesomeIcon icon={faUsers} className="text-info me-2" />
            <strong>Open Telegram Bot:</strong> Access the Telegram bot interface.
          </li>
          <li className="list-group-item" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <FontAwesomeIcon icon={faUserGraduate} className="text-info me-2" />
            <strong>Project Team:</strong> Displays team details.
          </li>
        </ul>
      </div>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3. Student Management</h3>
      <div className="mb-4">
        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>3.1. Student Search</h4>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          <FontAwesomeIcon icon={faSearch} className="me-2" /> Search by Name, Hall Ticket Number, Email, and Branch.
        </p>
        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>3.2. Student Addition</h4>
        <ul className="list-group">
          <li className="list-group-item" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <FontAwesomeIcon icon={faPlus} className="text-success me-2" />
            <strong>Add Student:</strong> Form to manually add students.
          </li>
          <li className="list-group-item" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <FontAwesomeIcon icon={faUpload} className="text-warning me-2" />
            <strong>Upload Excel:</strong> Upload multiple student records.
          </li>
        </ul>
        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>3.3. Student Display and Management</h4>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>List of students with options to edit or delete.</p>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          <FontAwesomeIcon icon={faEdit} className="text-primary me-2" /> Edit |
          <FontAwesomeIcon icon={faTrash} className="text-danger ms-2" /> Delete
        </p>
      </div>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>4. User Interaction Monitoring</h3>
      <div className="mb-4">
        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>4.1. Interaction Log</h4>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Displays interactions with Name, Count, and Date.</p>
      </div>

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>5. Important Dates</h3>
      <div>
        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>5.1. Event Management</h4>
        <ul className="list-group">
          <li className="list-group-item" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <FontAwesomeIcon icon={faPlus} className="text-success me-2" />
            <strong>Add Event:</strong> Add important dates.
          </li>
          <li className="list-group-item" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <FontAwesomeIcon icon={faCalendarAlt} className="text-warning me-2" />
            <strong>Notify:</strong> Send notifications.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDoc;