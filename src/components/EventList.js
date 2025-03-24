import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const EventList = ({ dates, onEdit, onDelete }) => {
  return (
    <ListGroup>
      {dates.map((date) => (
        <ListGroup.Item key={date.id} className="d-flex justify-content-between align-items-center">
          <div>
            <strong>{date.event_name}</strong> - {date.event_date}
          </div>
          <div>
            <Button variant="warning" size="sm" className="me-2" onClick={() => onEdit(date.id)}>
              Edit
            </Button>
            <Button variant="danger" size="sm" onClick={() => onDelete(date.id)}>
              Delete
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default EventList;
