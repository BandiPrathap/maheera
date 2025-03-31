import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotifyButton from "../components/NotifyButton";

import { fetchEvents, addEvent, updateEvent, deleteEvent } from "../api/events";
import EventList from "../components/EventList";
import EventModal from "../components/EventModal";

const ImportantDates = () => {
  const [dates, setDates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [eventData, setEventData] = useState({ event_name: "", event_date: "" });

  useEffect(() => {
    loadEvents();
  }, []);

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
        toast.success("Event updated successfully!");
      } else {
        await addEvent(eventData);
        toast.success("Event added successfully!");
      }
      loadEvents();
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
      loadEvents();
      toast.info("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event!");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Important Dates</h2>
      <div className="mb-3">
        <Button variant="primary" className="m" onClick={handleShow}>
          Add New Date
        </Button>
        <span>          </span>
        <NotifyButton/>
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
