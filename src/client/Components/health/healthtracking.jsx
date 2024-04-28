import { useState } from "react";

import "./healthtracking.scss";

export default function HealthTrackerForm({ handleSubmit }) {
  
  const userData = JSON.parse(localStorage.getItem("id"));

  
  const initialState = {
    weight: 0,
    bloodPressure: 0,
    fetalMovements: "",
    feelings: "",
   lastAppointment: "",
    nextAppointment: "",
    userId:userData,
  }

  const [tracker, setTracker] = useState(initialState)
 
  const handleSubmitDecorator = (e) => {
    e.preventDefault();
    handleSubmit(tracker);
    setTracker(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTracker({
      ...tracker,
      userId: userData,
      [name]:
        name === "weight" || name === "bloodPressure"
          ? parseInt(value) || ""
          : value,
    });
  };

  return (
    <>
      <div className="health_tracker">
        <h2>Health tracker for pregnant women</h2>
        <form className= "trackerForm"onSubmit={handleSubmitDecorator}>
          <label>Weight</label>
          <input
            type="number"
            name="weight"
            placeholder="what is your current weight?"
            value={tracker.weight}
            onChange={handleChange}
          />
          <label>Blood Pressure</label>
          <input
            type="number"
            name="bloodPressure"
            placeholder="Check your blood pressure and input here"
            value={tracker.bloodPressure}
            onChange={handleChange}
          />
          <label>Fetal Movement</label>
          <input
            type="text"
            name="fetalMovements"
            placeholder="How many kicks can you count?"
            value={tracker.fetalMovements}
            onChange={handleChange}
          />
          <label>Feelings</label>

          <textarea rows={10}
            type="text"
            name="feelings"
            placeholder="How do you feel today?"
            value={tracker.feelings}
            onChange={handleChange}
          />
         <label>Last Appointment Date</label>
          <input
            type="date"
            name="lastAppointment"
            placeholder="day-month-year"
            value={tracker.lastAppointment}
            onChange={handleChange}
          />
         <label>Next Appointment Date</label>
          <input
            type="date"
            name="nextAppointment"
            placeholder="day-month-year"
            value={tracker.nextAppointment}
            onChange={handleChange}
  /> 

          <button type="submit">Track my health</button>
        </form>
      </div>
    </>
  );
}
