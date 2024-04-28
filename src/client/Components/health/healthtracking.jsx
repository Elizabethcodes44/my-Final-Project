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
          <label>weight</label>
          <input
            type="number"
            name="weight"
            placeholder="what is your current weight?"
            value={tracker.weight}
            onChange={handleChange}
          />
          <label>blood pressure</label>
          <input
            type="number"
            name="bloodPressure"
            placeholder="bloodPressure"
            value={tracker.bloodPressure}
            onChange={handleChange}
          />
          <label>fetal Movement</label>
          <input
            type="text"
            name="fetalMovements"
            placeholder="How many kicks can you count?"
            value={tracker.fetalMovements}
            onChange={handleChange}
          />
          <label>feelings</label>

          <input
            type="text"
            name="feelings"
            placeholder="How do you feel today?"
            value={tracker.feelings}
            onChange={handleChange}
          />
         <label>last Appointment Date</label>
          <input
            type="date"
            name="lastAppointment"
            placeholder="day-month-year"
            value={tracker.lastAppointment}
            onChange={handleChange}
          />
         <label>next Appointment Date</label>
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
