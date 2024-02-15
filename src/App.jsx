import Home from "../src/Components/Home.jsx";
import Header from "../src/Components/Header.jsx";
import Footer from "../src/Components/Footer.jsx";

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
