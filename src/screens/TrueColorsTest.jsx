import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import TCQuests from "./../database/TrueColorsQuest";
// import TCPanel from "../components/TCPanel";
import TrueColorsRes from "../database/TrueColorsRes";
import Card4 from "../components/Card4.jsx";

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

  const result = async () => {
    let unfinished = 0;
    let answer = document.querySelectorAll('input[type="radio"]');
    // Check if all questions are answered
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].checked === true) {
        unfinished += 1;
      }
    }
    if (unfinished < 11) {
      alert("Bạn chưa hoàn thành bài trắc nghiệm");
    }

    // Initialize sums for each color category
    let orangeSum = 0,
      greenSum = 0,
      blueSum = 0,
      goldSum = 0;

    for (let i = 0; i < answer.length; i += 4) {
      if (answer[i].checked === true) {
        orangeSum += 1;
      }
      if (answer[i + 1].checked === true) {
        greenSum += 1;
      }
      if (answer[i + 2].checked === true) {
        blueSum += 1;
      }
      if (answer[i + 3].checked === true) {
        goldSum += 1;
      }
    }

    const colorScores = {
      orange: orangeSum,
      green: greenSum,
      blue: blueSum,
      gold: goldSum,
    };
    const highestColor = Object.keys(colorScores).reduce((a, b) =>
      colorScores[a] > colorScores[b] ? a : b
    );

    const resultData = TrueColorsRes.getdata(highestColor);
    setIsActive(false);
    setRes(resultData);
    console.log(resultData);
    document.querySelector(".Panel").style.display = "flex";
    try {
      if (currentUser) {
        const date = new Date().toLocaleString();
        const res = await fetch("http://localhost:3000/api/score/color", {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            time: time,
            date: date,
            score: resultData.content,
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
  const [progress, setProgress] = useState(0);
  const [countt, setCount] = useState(0);
  const scrollToNext = () => {
    let count = 0;
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < listAnswer.length; i += 4) {
      if (
        listAnswer[i].checked === true ||
        listAnswer[i + 1].checked === true ||
        listAnswer[i + 2].checked === true ||
        listAnswer[i + 3].checked === true
      ) {
        count++;
      }
    }
    setCount(count);
    setProgress(Math.floor((count / 11) * 100));
  };
  return (
    <>
      <div className="progress-card" id="progress-card">
        <div className="progress-card-title">Trắc nghiệm Màu sắc</div>
        <div className="text-bar">
          <span className="time-clock">Thời gian: {time}</span>
        </div>
        <ProgressBar
          completed={progress}
          baseBgColor="white"
          bgColor="linear-gradient(to right, #00bdfc, #a3e8ff)"
          className="progress-bar"
        />
      </div>

      <body className="body shorten-top-body">
        {TCQuests.map((item, index) => (
          <div
            id={`div-${index}`}
            key={item.content}
            onClick={() => scrollToNext()}
          >
            <Card4 Ques={item} key={item.content} index={index} />
          </div>
        ))}

        <div className="flex-row align-center width-fit-content">
          <button className="primary-btn font-18" onClick={result}>
            Xem kết quả
          </button>
        </div>
      </body>

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
                  <img
                    src={res.img}
                    alt="img"
                    width={125}
                    height={125}
                    className="margin-bottom-1rem"
                  />
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
    </>
  );
}
