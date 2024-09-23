import exit from "../assets/remove.png";
import React from "react";
import { BounceLoader } from "react-spinners";

const LearningStylePanel = ({ Data, loading }) => {
  const closeform = () => {
    document.querySelector(".Panel").style.display = "none";
    window.scrollTo(0, 0);
    document.getElementById("progress-card").style.display = "block";
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#04BCFC",
    padding: "20px",
  };


  return (
    <div className="Panel">
      <BounceLoader
        loading={loading}
        size={150}
        color="#50d1ff"
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={override}
      />
      {!loading && (
        <div className="result_form">
          <img
            src={exit}
            alt="exit_icon"
            width={30}
            height={30}
            className="img"
            onClick={closeform}
          ></img>
          <div className="panel_info">
            <div className="info">
              <div className="hero">
                <img src={Data.img} alt="img" width={100} height={100}></img>
                <span>{Data.description}</span>
              </div>
              <p>{Data.content}</p>
              <p>
                Một số gợi ý để cải thiện cách học của bạn:
                <ul>
                  {Data.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningStylePanel;
