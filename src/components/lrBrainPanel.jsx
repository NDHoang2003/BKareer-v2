import React from "react";
import { BounceLoader } from "react-spinners";

import exit from "../assets/remove.png";

const Panel = ({ Data }) => {
  const closeform = () => {
    document.querySelector(".Panel").style.display = "none";
    // window.scrollTo(0, 0);
    document.getElementById("progress-card").style.display = "block";
  };

  return (
    <div className="Panel">
      <div className="result_form">
        <img
          src={exit}
          alt="exit_icon"
          width={30}
          height={30}
          className="img margin-top-2rem margin-right-2rem"
          onClick={closeform}
        />

        <div className="panel_info">
          <div className="info">
            <div className="hero">
              <img
                src={Data.img}
                alt="img"
                width={150}
                height={125}
                className="margin-bottom-1rem"
              />
              <span>{Data.content}</span>
            </div>

            <p>{Data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Panel;
