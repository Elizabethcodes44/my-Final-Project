import "./Gallery.css";
import picture1 from "../../../../assets/picture1.jpg";
import picture2 from "../../../../assets/picture2.jpg";
import picture3 from "../../../../assets/picture3.jpg";
import picture4 from "../../../../assets/picture4.jpg";
import picture5 from "../../../../assets/picture5.jpg";
import picture6 from "../../../../assets/picture6.jpg";
import ImageSlider from "../Gallery/Imageslider";
const IMAGES = [picture1, picture2, picture3, picture4, picture5, picture6];

function Gallery() {
  return (
    <>
      <div className="Gallery_container">
        <ImageSlider imageUrls={IMAGES} />
      </div>
    </>
  );
}
export default Gallery;
