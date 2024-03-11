import Heropage from './Heropage.jsx';
import './Home.css'
import Health from './Health.jsx';
import Gallery from "./Gallery/Gallery.jsx"
import About from "./About.jsx";
import Courses from "./Courses.jsx";


function Main() {
    return(
        <>
        <main className='main'>
            <Heropage></Heropage>
            <Health></Health>
            <Courses></Courses>
            <Gallery></Gallery>
            <About></About>
            
            
            
        </main>
        </>
    )
}
export default Main;