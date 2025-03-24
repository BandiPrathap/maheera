import axios from "axios";

const API_URL = "https://maheera-woad.vercel.app/events";

export const fetchEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const addEvent = async (eventData) => {
  try {
    await axios.post(API_URL, eventData);
  } catch (error) {
    console.error("Error adding event:", error);
    throw error;
  }
};

export const updateEvent = async (id, eventData) => {
  try {
    await axios.put(`${API_URL}/${id}`, eventData);
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
};
