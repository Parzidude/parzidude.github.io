import React, { useState, useEffect } from "react";
import "./Image.css";

const InteractiveImages = ({
  img = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
  ],
}) => {
  return (
    <div className="interactiveimages">
      <div className="imagecontainer">
        {img.map((image, index) => {
          return (
            <button key={index}>
              <img src="image1.jpg" className="buttonimage" alt="img"></img>
            </button>
          );
        })}
      </div>
      <div className="infobox">
        <div>
          <img className="infobackground" src={img[0]}></img>
          <img className="infoimage" src={img[0]}></img>
        </div>
        <h1>Heading</h1>
        <p>text</p>
      </div>
    </div>
  );
};

export default InteractiveImages;
