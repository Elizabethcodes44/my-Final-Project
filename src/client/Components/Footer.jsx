import "./Footer.css";
import instagram from "../../../assets/instagram.jpg";
import facebook from "../../../assets/facebook.jpg";
import twitter from "../../../assets/twitter.jpg";
import linkedin from "../../../assets/linkedin.jpg";
function Footer() {
  return (
    <>
      <footer className="footer" id="contact">
        <h1>Get Social with us</h1>
        <div className="social-icons">
          <img src={instagram} alt="instagram image" />
          <img src={linkedin} alt="linkedin image" />
          <img src={facebook} alt="facebook image" />
          <img src={twitter} alt="twitter image" />
        </div>
      </footer>
    </>
  );
}
export default Footer;
