import React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { BounceLoader } from "react-spinners";

import Card from "../components/Card";
// import Panel from "../components/lrBrainPanel";
import questions from "../database/LrBrainQuest";
import lrList from "../database/LrCharacteristic";
import { useSelector } from "react-redux";
import exit from "../assets/remove.png";

export default function LeftRightBrainTest() {
  const list = questions;
  const [brain, setBrain] = useState({});
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState("");

  const closeform = () => {
    document.querySelector(".Panel").style.display = "none";
    window.scrollTo(0, 0);
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#04BCFC",
    padding: "20px",
  };

  const result = async () => {
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    let count = 0;
    let left = 0;
    let right = 0;
    let arr = [];
    let sum = 0;

    // check selected options
    for (let i = 0; i < listAnswer.length; i++) {
      if (listAnswer[i].checked === true) {
        count++;
        if (listAnswer[i].id % 2) {
          left = left + 1;
        } else {
          right = right + 1;
        }
        for (let j = 0; j < list.length; j++) {
          if (listAnswer[i].name === list[j].content) {
            // Match the answerId to the selected answer
            const selectedAnswer = list[j].answers.find(
              (ans) => ans.answerId === listAnswer[i].id
            );
            if (selectedAnswer) {
              sum += selectedAnswer.score; // Add the score of the selected answer
            }
          }
        }
      }
    }

    // not selected yet
    for (let i = 0; i < listAnswer.length; i += 2) {
      if (
        listAnswer[i].checked === false &&
        listAnswer[i + 1].checked === false
      ) {
        arr.push(i / 2 + 1);
      }
    }

    let data = "";

    // get points and return result
    if (count < 20) {
      alert(`Bạn chưa hoàn thành bài kiểm tra ở các câu ${arr.join(", ")}`);
      return;
    } else {
      setIsActive(false);
      setScore(`${sum}/${list.length * 20}`); // Assuming 20 is max score per question
      document.querySelector(".Panel").style.display = "flex";
      if (Math.abs(left - right) < 3) {
        data = "middle";
      } else if (left > right) {
        data = "left";
      } else {
        data = "right";
      }

      const data1 = lrList.getdata(data);
      try {
        if (currentUser) {
          console.log("currentUser");
          const date = new Date().toLocaleString();
          const res = await fetch("http://103.15.51.131:3000/api/score/lr", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: currentUser._id,
              time: "ss:ss",
              date: date,
              score: data1,
            }),
          });
          const data2 = await res.json();
          if (data2) {
            setTimeout(() => {
              setLoading(false);
              document.querySelector(".Panel").style.display = "flex";
              setBrain(data1);
            }, 1000);
          }
        } else {
          setTimeout(() => {
            setLoading(false);
            document.querySelector(".Panel").style.display = "flex";
            setBrain(data1);
          }, 2000);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    }
  };

  const [countt, setCount] = useState(0);

  const scrollToNext = () => {
    let count = 0;
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < listAnswer.length; i += 2) {
      if (
        listAnswer[i].checked === true ||
        listAnswer[i + 1].checked === true
      ) {
        count++;
      }
    }
    setCount(count);
    setProgress(Math.floor((count / list.length) * 100));
  };

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState("");

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
    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, [isActive, seconds]);

  return (
    <>
      <div className="progress-card" id="progress-card">
        <div className="progress-card-title">
          Trắc nghiệm não trái - não phải
        </div>
        <div className="text-bar">
          <span>
            Đã hoàn thành: {countt}/{list.length} câu
          </span>
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
        {list.map((item, index) => (
          <div
            id={`div-${index}`}
            key={item.content}
            onClick={() => scrollToNext()}
          >
            <Card Ques={item} key={item.content} index={index} />
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
          <div className="result_form margin-top-panel">
            <img
              src={exit}
              alt="exit_icon"
              width={30}
              height={30}
              className="img margin-top-2rem margin-right-2rem"
              onClick={closeform}
            />

            <div className="panel_info z-50">
              <div className="info">
                <div className="hero hero-margin">
                  <img
                    src={brain.img}
                    alt="img"
                    width={150}
                    height={125}
                    className="margin-bottom-1rem"
                  />
                  <span>{brain.content}</span>
                </div>

                <p>{brain.description}</p>

                <p className="mt-2">
                  {brain.char}
                </p>

                <p className="mt-2">
                  {brain.job}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
