import "./Header.css";
import logo from "../../public/favicon.png";
function Header() {
  return (
    <header>
      <div className="header">
        <div className="header_left">
          <img src={logo} className="logo" alt="logo" />
          <h2>SHELEADS</h2>
        </div>
        <div className="header_center">
          <ul className="header_list">
            <li>Home</li>
            <li>About</li>
            <li>Countries</li>

            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="header_right">
          <button>DONATE</button>
          <button>Sign-up</button>
          <button>Log-in</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
