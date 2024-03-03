import Heropage from './Heropage.jsx';
import './Home.css'
import Gallery from "./Gallery/Gallery.jsx"
function Main() {
    return(
        <>
        <main className='main'>
            <Heropage></Heropage>
            <Gallery></Gallery>
            
        </main>
        </>
    )
}
export default Main;