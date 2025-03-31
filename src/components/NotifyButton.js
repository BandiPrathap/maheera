import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotifyButton = () => {
  const handleNotify = async () => {
    try {
      const response = await fetch("https://maheera-woad.vercel.app/notify", {
        method: "POST",
      });
      
      if (response.ok) {
        toast.success("Notification sent successfully!");
      } else {
        toast.error(`Failed to send notification: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending notification:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <button onClick={handleNotify} className="btn btn-primary">
        Notify
      </button>
      <ToastContainer />
    </>
  );
};

export default NotifyButton;