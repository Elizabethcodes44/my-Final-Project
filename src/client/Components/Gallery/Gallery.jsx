import "./Gallery.css";
import picture1 from "../../../../assets/heropage1.jpg";
import picture2 from "../../../../assets/heropage2.jpg";
//import picture3 from "../../../../assets/picture3.jpg";
//import picture4 from "../../../../assets/picture4.jpg";
//import picture5 from "../../../../assets/picture5.jpg";
//import picture6 from "../../../../assets/picture6.jpg";
import Imageslider from "../Gallery/Imageslider.jsx";
const IMAGES = [picture1, picture2];

function Gallery() {
  return (
    <>
      <div className="Gallery_container">
        <div className="overflow-hidden relative">
          <div className="w-[40%]  m-auto pt-11 pb-11">
            <Imageslider IMAGES={IMAGES} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Gallery;
