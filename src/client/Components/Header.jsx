import "./Header.css";
import logo from "/favicon.png";
function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="header_left">
            <img src={logo} className="logo" alt="logo" />
            <h2>SHELEADS</h2>
          </div>
          <div className="header_center">
            <ul className="header_list">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>HEALTH</li>
              <li>COURSES</li>

              <li>GALLERY</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
