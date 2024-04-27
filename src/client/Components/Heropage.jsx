import "./Heropage.scss";
import image from "../../../assets/heropage2.jpg";

function Heropage() {
  return (
    <>
      <div className="hero-page">
        <div className="wrapper">
          <div className="textContainer">
            <h1>BUMP TECH</h1>
            <p>Introducing "BumpTech" – your ultimate pregnancy app:

Due Date Calculator: Get your due date instantly.
Health Tracker: Monitor your well-being effortlessly.
Appointment Planner: Never miss a doctor's visit.
Tech Strength Quiz: Discover your tech interests.
Free Tech Courses: Learn coding while expecting.</p>
          </div>
          </div>
        <div className="image">
          <img className="women_mount" src={image} alt="hero page image" />
        </div>
       
       
      </div>
    </>
  );
}
export default Heropage;
