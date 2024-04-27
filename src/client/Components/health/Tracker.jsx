import HealthTracker from "./healthtracking";
import { useState, useEffect } from "react";
const apiUrl = `https://sheleadsserverrepo-production.up.railway.app`;
function Tracker() {
  const [tracker, setTracker] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/healthtracker`)
      .then((res) => res.json())
      .then((res) => setTracker(res.data));
  }, []);
  
  const handleCreateTracker = async ({
    weight,
    bloodPressure,
    fetalMovements,
    feelings,
    lastAppointment,
    nextAppointment,
    userId,
  }) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weight,
        bloodPressure,
        fetalMovements,
        feelings,
        lastAppointment,
        nextAppointment,
        userId,
      }),
    };
  
    try {
      const data = await fetch(`${apiUrl}/healthtracker`, options);
      if (data.ok) {
        const newTracker = await data.json();
        
        setTracker([...tracker, newTracker]);
      } else {
        console.error("Failed to create tracker:", data.statusText);
      }
    } catch (error) {
      console.error("Error creating tracker:", error.message);
    }
  };
  

  return (
      <HealthTracker handleSubmit={handleCreateTracker} />
  );
}

export default Tracker;
