import ImageCarousel from "../Components/ImageCarousel";

const images = [
  "./src/assets/image1.jpg",
  "./src/assets/image2.jpg",
  "./src/assets/image3.jpg",
  "./src/assets/image4.jpg",
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
