import "./Health.css";
import pregnancy from "../../../../assets/health.jpg";
import HealthTracker from "./healthtracking";
import Pregnancytips from "./prenancytips";
import { useState } from "react";

function Health() {
    const [lastPeriod, setLastPeriod] = useState("");
    const [dueDate, setDueDate] = useState("");

    const calculateDueDate = () => {
        const lastPeriodDate = new Date(lastPeriod);
        const dueDateCalculation = new Date(
            lastPeriodDate.getTime() + 280 * 24 * 60 * 60 * 1000
        ); // Adding 280 days

        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDueDate = dueDateCalculation.toLocaleDateString(
            "en-US",
            options
        );
        setDueDate(formattedDueDate);
    };

    return (
        <div className="healthContainer" id="health">
            <div className="pregnancyDate">
                <div className="calculator">
                    <h2>Pregnancy Due Date Calculator</h2>
                    <h4>
                        Congratulations on the anticipation of your little one! Discover
                        your expected due date effortlessly by completing the form below.
                        Please keep in mind that babies can arrive up to two weeks before or
                        after the calculated due date.{" "}
                    </h4>
                    <div className="form-container">
                        <label htmlFor="lastPeriod">
                            Enter the date of your last period:
                        </label>
                        <br />
                        <input
                            type="date"
                            id="lastPeriod"
                            value={lastPeriod}
                            onChange={(e) => setLastPeriod(e.target.value)}
                        />
                        <br />
                        <br />
                        <button onClick={calculateDueDate}>Calculate Due Date</button> 

                    </div>
                    {dueDate && (
                        <div className="result">
                            <p>Congratulations ! Your due date is: {dueDate}</p>
                        </div>
                    )}
                </div>
                <div className="image">
                    <img src={pregnancy} alt="pregnant woman" />
                </div>
            </div>
            <Pregnancytips></Pregnancytips>
            <HealthTracker />
            
        </div>
    );
}

export default Health;
