import "./Heropage.css";
import image from "../../../assets/heropage2.jpg";

function Heropage() {
  return (
    <>
      <div className="hero-page">
        <div className="image">
          <img className="women_mount" src={image} alt="hero page image" />
        </div>
        <div className="herotext">
          <h3>Welcome to ``She Leads`` </h3>
          <p>
             🚀 Empowering Women in Tech: Access
            free tech courses to advance your skills and thrive in the digital
            age. </p><p>💰 Financial Independence: Gain financial literacy and explore
            opportunities for entrepreneurship and investment.</p> <p>🩸 Menstrual
            Hygiene: Support girls in Africa with access to sanitary pads,
            ensuring dignity and education continuity.</p> <p> 🤰 Pregnancy &
            Post-Delivery Care: Discover invaluable tips and resources for new
            moms, prioritizing maternal health and well-being. </p> <p>💆‍♀️ Self-Care:
            Embrace self-care practices to nurture your physical and mental
            wellness, empowering you to lead with strength and confidence.</p> 
            <h5>Join
            our community and embark on a journey of empowerment, growth, and
            solidarity. Together, we lead the way!
          </h5>
         
        </div>
      </div>
    </>
  );
}
export default Heropage;
