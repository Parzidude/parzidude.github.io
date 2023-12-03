import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const InteractiveImages = ({ data, buttonclicks }) => {
  const [randomNumArray, setRandomNumArray] = useState([]);

  useEffect(() => {
    setRandomNumArray(
      data.info.map(() => {
        return Math.round(Math.random() * (6 - -6) + -6);
      })
    );
  }, []);

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
            <button
              key={index}
              style={{
                rotate: `${randomNumArray[index]}deg`,
                backgroundColor: data.polaroidcolor,
              }}
            >
              <img
                src={val.imageurl}
                onClick={() => {
                  buttonclicks(index);
                }}
                className="buttonimage"
                alt="img"
                style={{ objectFit: "cover" }}
              ></img>
            </button>
          );
        })}
      </div>
    </div>
  );
};

InteractiveImages.propTypes = {
  data: PropTypes.object,
};

export default InteractiveImages;
