import React from "react";
import exit from "../assets/remove.png";
import WorkStyles from "../database/WorkStyles.js";
import { BounceLoader } from "react-spinners";

const WorkStylesPanel = ({ selectedStyle, onClose, isOpen, loading }) => {
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
        {!loading && selectedStyle && (
          <div className="result_form">
            <img
              src={exit}
              alt="exit_icon"
              width={30}
              height={30}
              className="img margin-top-2rem margin-right-2rem"
              onClick={onClose}
            />
            <div className="panel_info">
              <div className="info">
                <div className="hero hero-margin">
                  <span>{selectedStyle.style}</span>
                </div>
                <p>{selectedStyle.description}</p>
  
                {/* Display traits and other details in a table */}
                <table className="style-table">
                  <tbody>
                    <tr>
                      <th className="table-heading">Điểm mạnh</th>
                      <td>{selectedStyle.effectiveTraits.join(", ")}</td>
                    </tr>
                    <tr>
                      <th className="table-heading">Điểm yếu</th>
                      <td>{selectedStyle.ineffectiveTraits.join(", ")}</td>
                    </tr>
                    <tr>
                      <th className="table-heading">Gợi ý giao tiếp</th>
                      <td>{selectedStyle.communicationTips.join(", ")}</td>
                    </tr>
                    <tr>
                      <th className="table-heading">Yếu tố gây căng thẳng</th>
                      <td>{selectedStyle.stressors.join(", ")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default WorkStylesPanel;