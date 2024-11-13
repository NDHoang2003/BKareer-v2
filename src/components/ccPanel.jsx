import React from "react";
import exit from "../assets/remove.png";
import clusterList from "../database/CCMajor.js";
import { BounceLoader } from "react-spinners";

const Panel = ({ majorName, onClose, isOpen, loading }) => {
  

  const majorData = clusterList.getdata(majorName);

  
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#04BCFC",
    padding: "20px",
  };
  return (
    <div className="Panel" style={{ display: isOpen ? "flex" : "none" }}>
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
            onClick={onClose}
          ></img>
          <div className="panel_info">
            <div className="info">
              <div className="hero hero-margin">
                <img
                  src={majorData.img}
                  alt="img"
                  width={150}
                  height={150}
                ></img>
                <span>{majorData.name}</span>
              </div>
              <h3>{majorData.description}</h3>
              {/* Phần này có thể thêm thông tin khác từ dữ liệu nếu cần */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panel;
