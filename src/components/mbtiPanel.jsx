import exit from "../assets/remove.png"
import React from "react";
// import { setMbti } from "../database/Result";

const Panel = ({ Data }) => {

  const closeform = () => {
    document.querySelector(".Panel").style.display = "none";
    window.scrollTo(0, 0);
  };

  // const handleReturnClick = () => {
  //   // Chuyển hướng người dùng về trang Major Result và truyền dữ liệu qua URL
  //   window.location.replace('/majorResult');
  // };

  return (
    <div className="Panel">
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
              Có thể bạn chưa biết: {Data.people} và nhiều nhân vật tiêu biểu
              khác có cùng nhòm tính cách với bạn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Panel;