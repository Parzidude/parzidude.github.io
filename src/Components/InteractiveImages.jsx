import React, { useState, useEffect, useRef } from "react";
import "./image.css";

//TODO make info image able to show itself in original size on click

const InteractiveImages = ({ data }) => {
  const [selectedimage, setselectedimage] = useState(null);

  const onbuttonclick = (index) => {
    const info = document.querySelector(".infobox");
    const tint = document.querySelector(".tint");

    function ClickOutside(event) {
      if (!Array.from(info.children).includes(event.target)) {
        info.classList.remove("grow");
        tint.style.visibility = "hidden";
      }
    }

    if (info.classList.contains("grow")) {
      info.classList.remove("grow");
      tint.style.visibility = "hidden";
    } else {
      setselectedimage(index);
      info.classList.add("grow");
      tint.style.visibility = "visible";
      document.addEventListener("mousedown", ClickOutside);
    }
  };

  return (
    <div
      className="interactiveimages"
      style={{ backgroundImage: `url(${data.BackgroundImage})` }}
    >
      <div className="generaltext">
        <h1>{data.YearHeading}</h1>
        <p>{data.Yearsubhead}</p>
      </div>
      <div className="imagecontainer">
        {data.info.map((val, index) => {
          return (
            <button key={index}>
              <img
                src={val.imageurl}
                onClick={() => {
                  onbuttonclick(index);
                }}
                className="buttonimage"
                alt="img"
              ></img>
            </button>
          );
        })}
      </div>
      <div className="tint"></div>
      <div className="infobox">
        <div>
          <img
            className="infoimage"
            src={data.info[selectedimage].imageurl}
            style={{ objectPosition: data.info[selectedimage].infoimageoffset }}
          ></img>
        </div>
        <h1>{data.info[selectedimage].infoheading}</h1>
        <p>{data.info[selectedimage].infotext}</p>
      </div>
    </div>
  );
};

export default InteractiveImages;
