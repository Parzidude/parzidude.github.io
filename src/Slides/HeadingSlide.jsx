import ImageCarousel from "../Components/ImageCarousel";

const images = [
  "./src/assets/image1.JPG",
  "./src/assets/image2.JPG",
  "./src/assets/image3.JPG",
  "./src/assets/image4.JPG",
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
