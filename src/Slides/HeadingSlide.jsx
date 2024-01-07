import ImageCarousel from "../Components/ImageCarousel";

const images = [
  "/images/Y1/1.jpg",
  "/images/Y3/3.jpg",
  "/images/Y3/1.jpg",
  "/images/Y4/1.jpg",
  "/images/Y5/5.jpg",
  "/images/Y5/1.jpg",
  "/images/Y3/3.jpg",
  "/images/Y7/1.jpg",
  "/images/Y8/3.jpg",
  "/images/Y9/1.jpg",
  "/images/Y10/1.jpg",
  "/images/Y1/4.jpg",
  "/images/Y2/5.jpg",
  "/images/Y3/3.jpg",
  "/images/Y4/2.jpg",
  "/images/Y5/5.jpg",
  "/images/Y6/2.jpg",
  "/images/Y7/3.jpg",
  "/images/Y8/3.jpg",
  "/images/Y9/4.jpg",
  "/images/Y10/2.jpg",
  "/images/Y1/2.jpg",
  "/images/Y3/4.jpg",
  "/images/Y3/5.jpg",
  "/images/Y4/6.jpg",
  "/images/Y5/7.jpg",
  "/images/Y5/3.jpg",
  "/images/Y3/5.jpg",
  "/images/Y7/4.jpg",
  "/images/Y8/7.jpg",
  "/images/Y9/8.jpg",
  "/images/Y10/10.jpg",
  "/images/Y1/1.jpg",
  "/images/Y2/2.jpg",
  "/images/Y3/5.jpg",
  "/images/Y4/6.jpg",
  "/images/Y5/8.jpg",
  "/images/Y6/3.jpg",
  "/images/Y7/2.jpg",
  "/images/Y8/1.jpg",
  "/images/Y9/5.jpg",
  "/images/Y10/1.jpg",
  "/images/Y1/1.jpg",
  "/images/Y3/3.jpg",
  "/images/Y3/1.jpg",
  "/images/Y4/1.jpg",
  "/images/Y5/5.jpg",
  "/images/Y5/1.jpg",
  "/images/Y3/3.jpg",
  "/images/Y7/1.jpg",
  "/images/Y8/3.jpg",
  "/images/Y9/1.jpg",
  "/images/Y10/1.jpg",
  "/images/Y1/4.jpg",
  "/images/Y2/5.jpg",
  "/images/Y3/3.jpg",
  "/images/Y4/2.jpg",
  "/images/Y5/5.jpg",
  "/images/Y6/2.jpg",
  "/images/Y7/3.jpg",
  "/images/Y8/3.jpg",
  "/images/Y9/4.jpg",
  "/images/Y10/2.jpg",
  "/images/Y1/2.jpg",
  "/images/Y3/4.jpg",
  "/images/Y3/5.jpg",
  "/images/Y4/6.jpg",
  "/images/Y5/7.jpg",
  "/images/Y5/3.jpg",
  "/images/Y3/5.jpg",
  "/images/Y7/4.jpg",
  "/images/Y8/7.jpg",
  "/images/Y9/8.jpg",
  "/images/Y10/10.jpg",
  "/images/Y1/1.jpg",
  "/images/Y2/2.jpg",
  "/images/Y3/5.jpg",
  "/images/Y4/6.jpg",
  "/images/Y5/8.jpg",
  "/images/Y6/3.jpg",
  "/images/Y7/2.jpg",
  "/images/Y8/1.jpg",
  "/images/Y9/5.jpg",
  "/images/Y10/1.jpg",
];

function HeadingSlide() {
  return (
    <div className="headingslide">
      <div className="headingtextcontainer">
        {" "}
        <h1 className="headingtitle">Our journey</h1>
        <span className="headingtext">
          A digital look back at all of our best memories together.
        </span>
      </div>
      <ImageCarousel images={images} imageheight="90vh"></ImageCarousel>;
      <a className="downarrow">▼</a>
    </div>
  );
}

export default HeadingSlide;
