import "./Gallery.css";

import picture1 from "../../../../assets/picture1.jpg";
import picture2 from "../../../../assets/picture2.jpg";
import picture3 from "../../../../assets/picture3.jpg";
import picture4 from "../../../../assets/picture4.jpg";
import picture5 from "../../../../assets/picture5.jpg";
import picture6 from "../../../../assets/picture6.jpg";
import picture7 from "../../../../assets/picture7.jpg";
import Imageslider from "../Gallery/Imageslider.jsx";
const IMAGES = [
  picture1,
  picture2,
  picture3,
  picture4,
  picture5,
  picture6,
  picture7,
];

function Gallery() {
  return (
    <>
      <div className="Gallery_container" id="gallery">

        <div className="w-[40%]  m-auto pt-5 ">
          <Imageslider IMAGES={IMAGES} />
        </div>
      </div>
    </>
  );
}
export default Gallery;
