import "./Header.scss";
import logo from "/favicon.svg";
import Sidebar from "./Sidebar";
export default function Header (){
  return(
    <>
    <header>
      <Sidebar />
    <div className="header_left">
            <img src={logo} className="logo" alt="logo" />

           
          </div>

    </header>
    </>
  )
}