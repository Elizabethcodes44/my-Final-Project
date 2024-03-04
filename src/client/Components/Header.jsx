import { useState } from "react";
import "./Header.css";
import logo from "/favicon.png";
import { Link } from "react-scroll";
function Header() {
  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);
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
              <li>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={closeMenu}
                >
                  HOME
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={closeMenu}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="health"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={closeMenu}
                >
                  HEALTH
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={closeMenu}
                >
                  COURSES
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-190}
                  duration={500}
                  onClick={closeMenu}
                >
                  GALLERY
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={closeMenu}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
