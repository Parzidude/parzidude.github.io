import { useRef, useState } from "react";
import InteractiveImages from "../Components/InteractiveImages";
import PropTypes from "prop-types";
import { useEffect } from "react";

//TODO make info image able to show itself in original size on click

const Slide = ({ interactiveimagedata }) => {
  const [selectedimage, setselectedimage] = useState(0);
  const inforef = useRef(null);
  const tintref = useRef(null);
  // const bigimageref = useRef(null);

  function ClickOutside(event) {
    if (
      !Array.from(inforef.current.querySelectorAll("*")).includes(event.target)
    ) {
      inforef.current.classList.remove("grow");
      tintref.current.style.visibility = "hidden";
      setselectedimage(0);
      document.removeEventListener("mousedown", ClickOutside);
    }
  }

  const onbuttonclick = (index) => {
    if (inforef.current.classList.contains("grow")) {
      inforef.current.classList.remove("grow");
      tintref.current.style.visibility = "hidden";
    } else {
      setselectedimage(index);
      inforef.current.classList.add("grow");
      tintref.current.style.visibility = "visible";
      document.addEventListener("mousedown", ClickOutside);
    }
  };

  if (interactiveimagedata.info.length === 0) {
    return (
      <div
        className="interactiveimages"
        style={{
          backgroundImage: `url(${interactiveimagedata.BackgroundImage})`,
        }}
      >
        <div className="generaltext">
          <h1 style={{ color: interactiveimagedata.headingcolor }}>
            {interactiveimagedata.YearHeading}
          </h1>
          <p style={{ color: interactiveimagedata.headingcolor }}>
            {interactiveimagedata.Yearsubhead}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="slide">
        <div ref={tintref} className="tint"></div>
        <div
          ref={inforef}
          className="infobox"
          style={{
            backgroundColor: interactiveimagedata.polaroidcolor,
          }}
        >
          <div>
            <img
              className="infoimage"
              src={interactiveimagedata.info[selectedimage].imageurl}
              style={{
                objectPosition:
                  interactiveimagedata.info[selectedimage].infoimageoffset,
              }}
            ></img>
          </div>
          <p style={{ color: interactiveimagedata.polaroidtextcolor }}>
            {interactiveimagedata.info[selectedimage].infotext}
          </p>
        </div>
        <InteractiveImages
          data={interactiveimagedata}
          buttonclicks={onbuttonclick}
        />
      </div>
    );
  }
};

Slide.propTypes = {
  interactiveimagedata: PropTypes.object,
};

export default Slide;
