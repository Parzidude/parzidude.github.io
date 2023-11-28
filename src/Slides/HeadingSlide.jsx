import ImageCarousel from "../Components/ImageCarousel";

const images = [
  "/public/image1.jpg",
  "/public/image2.jpg",
  "/public/image3.jpg",
  "/public/image4.jpg",
];

function HeadingSlide() {
  return (
    <div className="headingslide">
      <div className="headingtextcontainer">
        {" "}
        <h1 className="headingtitle">Heding</h1>
        <span className="headingtext">texttexttetetetetet</span>
      </div>
      <ImageCarousel images={images} imageheight="90vh"></ImageCarousel>;
      <a className="downarrow">▼</a>
    </div>
  );
}

export default HeadingSlide;
