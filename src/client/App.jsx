import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div className="app-Container">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
