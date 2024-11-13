import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import TCQuests from "./../database/TrueColorsQuest";
// import TCPanel from "../components/TCPanel";
import TrueColorsRes from "../database/TrueColorsRes";

import exit from "../assets/remove.png";
import { BounceLoader } from "react-spinners";

export default function TrueColorsTest() {

  const { currentUser } = useSelector((state) => state.user);

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

  const [answer, setAnswer] = React.useState(new Array(44).fill(0));
  const [res, setRes] = React.useState({});
  const [time, setTime] = useState("0:00");
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleInputChange = (questionIndex, answerId, event) => {
    // Get input value and check if it's valid
    let input = event.target.value;

    // Only allow 1, 2, 3, or 4. If invalid, set it to 1.
    if (!["1", "2", "3", "4"].includes(input)) {
      input = "1";
    }

    // Update the answer array
    const updatedAnswers = [...answer];
    updatedAnswers[questionIndex * 4 + answerId] = parseInt(input, 10);
    setAnswer(updatedAnswers);
  };

  const result = async () => {
    let unfinished = [];
    
    // Check if all questions are answered
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === 0) {
        unfinished.push(Math.floor(i / 4) + 1);
      }
    }

    // Initialize sums for each color category
    let orangeSum = 0, greenSum = 0, blueSum = 0, goldSum = 0;

    // Calculate color sums based on answer array
    for (let i = 0; i < answer.length; i += 4) {
      orangeSum += answer[i] || 0;
    }
    for (let i = 1; i < answer.length; i += 4) {
      greenSum += answer[i] || 0;
    }
    for (let i = 2; i < answer.length; i += 4) {
      blueSum += answer[i] || 0;
    }
    for (let i = 3; i < answer.length; i += 4) {
      goldSum += answer[i] || 0;
    }

    const colorScores = { orange: orangeSum, green: greenSum, blue: blueSum, gold: goldSum };
    const highestColor = Object.keys(colorScores).reduce((a, b) => colorScores[a] > colorScores[b] ? a : b);

    // Get result data based on the highest scoring color
    const resultData = TrueColorsRes.getdata(highestColor);

    // if (unfinished.length > 0) {
    //   alert(`Bạn chưa hoàn thành bài kiểm tra ở các câu ${unfinished.join(", ")}`);
    //   return;
    // } else {
      setIsActive(false);
      setRes(resultData);
      document.querySelector(".Panel").style.display = "flex";
      try {
        if (currentUser) {
          const date = new Date().toLocaleString();
          const res = await fetch("http://localhost:3000/api/score/iq", {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              time: time,
              date: date,
              score: `${sum}/${list.length}`,
            }),
          });
          const data2 = await res.json();
          if (data2) {
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          }
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    // }
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        setTime(`${min}:${sec < 10 ? "0" + sec : sec}`);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <body className="body">
        <div className="workstyle-progress-card" id="workstyle-progress-card">
        <div className="progress-card-title">Bài kiểm tra tính cách True Colors</div>
        <div className="text-bar">
          <span className="time-clock">Thời gian: {time}</span>
        </div>
        <div className="CC-instruction-txt font-18">
          <span className="bold-txt">Hướng dẫn: </span>
          <span>
            Dưới đây là 11 câu chưa hoàn chỉnh mô tả về con người. Mỗi câu có
            bốn kết thúc có thể. Hãy chấm 4 điểm cho cụm từ "giống bạn nhất",
            3 điểm cho cụm từ "giống bạn thứ hai", 2 điểm cho cụm từ tiếp
            theo và 1 điểm cho cụm từ "không giống bạn nhất".
          </span>
        </div>
      </div>

        <div>
          {TCQuests.map((item, index) => (
            <div className="question-card" key={index}>
              <h1>{item.content}</h1>
              {item.answers.map((answerItem, answerId) => (
                <div className="font-18" key={answerId}>
                  <input
                    value={answer[index * 4 + answerId] || "1"} // Default to 1
                    type="text"
                    pattern="[1-4]"
                    onInput={(e) => handleInputChange(index, answerId, e)}
                    onFocus={(e) => e.target.select()}
                    className="TC-input"
                  />
                  {answerItem.answerContent}
                </div>
              ))}
            </div>
          ))}

          <div className="flex-row align-center width-fit-content">
            <button
              className="primary-btn font-18"
              onClick={result}
            >
              Xem kết quả
            </button>
          </div>

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
                      <img src={res.img} alt="img" width={125} height={125} className="margin-bottom-1rem"/>
                      <span>{res.content}</span>
                    </div>
                    <p className="hero margin-bottom-1rem">{res.description}</p>
                    <p>
                      <span className="bold-txt">Mẹo vặt:</span> {res.tips}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </body>
    </>
  );
}
