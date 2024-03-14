import  { useState, useEffect } from 'react';
import './healthtracking.css'
function HealthTracker() {
    const [feelings, setFeelings] =useState('');
    const [weight, setWeight] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const [fetalMovements, setFetalMovements] = useState('');
    const [healthData, setHealthData] = useState([]);

    useEffect(() => {
        // Fetch health data for the logged-in user on component mount
        fetchHealthData();
    }, []);

    const fetchHealthData = async () => {
        try {
            const response = await fetch('/api/health');
            if (!response.ok) {
                throw new Error('Failed to fetch health data');
            }
            const data = await response.json();
            setHealthData(data);
        } catch (error) {
            console.error('Error fetching health data:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send health data to the backend
            const response = await fetch('/api/health', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    weight,
                    bloodPressure,
                    fetalMovements
                })
            });

            if (!response.ok) {
                throw new Error('Failed to submit health data');
            }

            // Refresh health data after submission
            fetchHealthData();

            // Reset form fields after submission
            setWeight('');
            setBloodPressure('');
            setFetalMovements('');
            setFeelings('');
        } catch (error) {
            console.error('Error submitting health data:', error);
        }
    };

    return (
        <div className='tracker_container'>
            <h1>Health Tracker for Pregnant Women</h1>
            <form className="trackingform"onSubmit={handleSubmit}>
               
                <label htmlFor="weight">Weight (lbs):</label>
                <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required /><br />
                <label htmlFor="bloodPressure">Blood Pressure:</label>
                <input type="text" id="bloodPressure" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} required /><br />
                <label htmlFor="fetalMovements">Fetal Movements:</label>
                <input type="text" id="fetalMovements" value={fetalMovements} onChange={(e) => setFetalMovements(e.target.value)} required /><br />
                <label>Feelings
                    <textarea type="text"
                    value = {feelings}
                onChange= {(e) => setFeelings(e.target.value)} 
                placeholder='how do you feel today?'required >
                    
                    </textarea>
                </label> <br />
                <button type="submit">Submit</button>
            </form>

            <h2>Your Health Data:</h2>
            <ul>
                {healthData.map((data, index) => (
                    <li key={index}>
                        <p>Date: {data.date}</p>
                        <p>Weight: {data.weight} lbs</p>
                        <p>Blood Pressure: {data.bloodPressure}</p>
                        <p>Fetal Movements: {data.fetalMovements}</p>
                        <p>How you feel: {data.feelings}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HealthTracker;
