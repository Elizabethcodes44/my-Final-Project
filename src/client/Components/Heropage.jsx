import "./Heropage.css";
import image from "../../../assets/heropage2.jpg";

function Heropage() {
  return (
    <>
      <div className="hero-page" id="hero">
        <div className="image">
          <img className="women_mount" src={image} alt="hero page image" />
        </div>
        <div className="herotext">
          <h3>Welcome to ``She Leads`` </h3>
          <p>
             🚀 We Empower Women in Tech  </p><p>💰 Learn about Financial Independence</p> <p>🩸 Learn about Menstrual
            Hygiene and get access to free sanitary pads!</p> <p> 🤰 We care about Pregnant women.Follow us for health tips on pregnacy  &
            Post-Delivery Care </p> <p>💆‍♀️ Women Self-Care</p> 
            <h5>Join
            our community by signing up on the webpage and embark on a journey of empowerment, growth, and
            solidarity. Together, we lead the way!
          </h5>
         
        </div>
      </div>
    </>
  );
}
export default Heropage;
