import "./Heropage.scss";
import image from "../../../assets/heropage2.jpg";

function Heropage() {
  return (
    <>
      <div className="hero-page">
        <div className="wrapper">
          <div className="textContainer">
            <h1>BUMP TECH <p>Tecum per graviditatem</p></h1>
            
            
            <p>Introducing "BumpTech" your ultimate pregnancy app that allows you to get your due date instantly, Monitor your well-being effortlessly, Never miss a doctor's visit, Discover your tech interests and learn coding while expecting!</p>
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
