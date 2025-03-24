import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EventModal = ({ show, handleClose, eventData, setEventData, handleSave, editing }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editing !== null ? "Edit Date" : "Add New Date"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Event</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event name"
              value={eventData.event_name}
              onChange={(e) => setEventData({ ...eventData, event_name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={eventData.event_date}
              onChange={(e) => setEventData({ ...eventData, event_date: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          {editing !== null ? "Update" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;
