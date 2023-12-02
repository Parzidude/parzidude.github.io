import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

function ImageCarousel({ images, imageheight = "100vh" }) {
  const [currentIndex, setCurrentIndex] = useState((images.length - 1) / 2);

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    carousel.style.transform = `translateX(${-currentIndex * 750}px)`;
    const timer = setInterval(() => {
      carousel.style.transform = `translateX(${-currentIndex * 750}px)`;
      setCurrentIndex(
        currentIndex + 1 >= images.length - 1 ? 0 : currentIndex + 1
      );
    }, 13000);
    return () => clearInterval(timer);
  });

  return (
    <div className="carousel">
      {images.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            alt="img"
            className="carousel-image"
            style={{ height: imageheight }}
          />
        );
      })}
      {images.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            alt="img"
            className="carousel-image"
            style={{ height: imageheight }}
          />
        );
      })}
      {images.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            alt="img"
            className="carousel-image"
            style={{ height: imageheight }}
          />
        );
      })}
    </div>
  );
}
ImageCarousel.propTypes = {
  images: PropTypes.array,
  imageheight: PropTypes.string,
};
export default ImageCarousel;
