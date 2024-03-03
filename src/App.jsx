import Home from "./client/Components/Home.jsx";
import Header from "./client/Components/Header.jsx";
import Footer from "./client/Components/Footer.jsx";

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
