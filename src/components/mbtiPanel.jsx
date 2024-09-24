import exit from "../assets/remove.png";
import React from "react";
import { BounceLoader } from "react-spinners";

const Panel = ({ Data, loading }) => {
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
            className="img margin-top-2rem margin-right-2rem"
            onClick={closeform}
          />
          
          <div className="panel_info">
            <div className="info">
              <div className="hero">
                <img src={Data.img} alt="img" width={125} height={125} className="margin-bottom-1rem"/>
                <span>{Data.description}</span>
              </div>
              <p className="hero">{Data.content}</p>
              <p>
                Có thể bạn chưa biết: {Data.people} và nhiều nhân vật tiêu biểu
                khác có cùng nhòm tính cách với bạn
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Panel;
