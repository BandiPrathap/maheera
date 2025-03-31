import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotifyButton from "../components/NotifyButton";

import { fetchEvents, addEvent, updateEvent, deleteEvent } from "../api/events";
import EventList from "../components/EventList";
import EventModal from "../components/EventModal";
import Login from "../components/Login";

const ImportantDates = () => {
  const [dates, setDates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [eventData, setEventData] = useState({ event_name: "", event_date: "" });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    if (isAdmin) {
      loadEvents();
    }
  }, [isAdmin]);

  const loadEvents = async () => {
    try {
      const data = await fetchEvents();
      setDates(data);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to fetch events!");
    }
  };

  const handleShow = () => {
    setEditing(null);
    setEventData({ event_name: "", event_date: "" });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditing(null);
    setEventData({ event_name: "", event_date: "" });
  };

  const handleSave = async () => {
    try {
      if (editing !== null) {
        await updateEvent(editing, eventData);
        setDates((prevDates) =>
          prevDates.map((d) => (d.id === editing ? { ...d, ...eventData } : d))
        );
        toast.success("Event updated successfully!");
      } else {
        const newEvent = await addEvent(eventData);
        setDates((prevDates) => [...prevDates, newEvent]);
        toast.success("Event added successfully!");
      }
      handleClose();
    } catch (error) {
      console.error("Error saving event:", error);
      toast.error(editing ? "Failed to update event!" : "Failed to add event!");
    }
  };

  const handleEdit = (id) => {
    const dateToEdit = dates.find((d) => d.id === id);
    if (dateToEdit) {
      setEventData(dateToEdit);
      setEditing(id);
      setShowModal(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      setDates((prevDates) => prevDates.filter((d) => d.id !== id));
      toast.info("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event!");
    }
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAdmin(false);
  };

  return !isAdmin ? (
    <Login setIsAdmin={setIsAdmin}/>
  ) : (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Important Dates</h2>
        <button className="btn btn-danger mb-3" onClick={handleAdminLogout}>
          Logout
        </button>
      </div>
      <div className="mb-3">
        <Button variant="primary" className="me-2" onClick={handleShow}>
          Add New Date
        </Button>
        <NotifyButton />
      </div>

      <EventList dates={dates} onEdit={handleEdit} onDelete={handleDelete} />

      <EventModal
        show={showModal}
        handleClose={handleClose}
        eventData={eventData}
        setEventData={setEventData}
        handleSave={handleSave}
        editing={editing}
      />
    </div>
  );
};

export default ImportantDates;
