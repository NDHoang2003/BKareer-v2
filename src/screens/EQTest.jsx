import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { BounceLoader } from "react-spinners";
import { useSelector } from "react-redux";

import Card4 from "../components/Card4.jsx";
import eqQuestions from "../database/EQQues.js"; // Use the EQ questions data
import exit from "../assets/remove.png";
import eq from "../assets/eq-icon.png"; // Change to your EQ test icon

export default function EQTest() {
  const { currentUser } = useSelector((state) => state.user);
  const list = eqQuestions; // EQ questions list
  const [progress, setProgress] = useState(0);

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

  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState("");

  const result = async () => {
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    let count = 0;
    let sum = 0;
    for (let i = 0; i < listAnswer.length; i++) {
      if (listAnswer[i].checked === true) {
        count++;
        // Find the question and associated score
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
    if (count < list.length) {
      alert("Bạn chưa hoàn thành bài trắc nghiệm");
    } else {
      setIsActive(false);
      setScore(`${sum}/${list.length * 20}`); // Assuming 20 is max score per question
      document.querySelector(".Panel").style.display = "flex";
      try {
        if (currentUser) {
          const date = new Date().toLocaleString();
          const res = await fetch("http://103.15.51.131:3000/api/score/eq", {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: currentUser._id,
              time: elapsedTime,
              date: date,
              score: `${sum}/${list.length * 20}`,
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
    }
  };

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
    setProgress(Math.floor((count / list.length) * 100));
  };

  const [seconds, setSeconds] = useState(10 * 60); // 20 phút = 20 * 60 giây
  const [elapsedSeconds, setElapsedSeconds] = useState(0); // Thời gian đã trôi qua
  const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState("");
  const [elapsedTime, setElapsedTime] = useState("");

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
        setElapsedSeconds((prevElapsed) => prevElapsed + 1);
      }, 1000);
    } else if (!isActive || seconds === 0) {
      clearInterval(interval);
    }

    // Cập nhật thời gian hiển thị cho đếm ngược
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    setTime(`${min}:${sec < 10 ? "0" + sec : sec}`);

    // Cập nhật thời gian hiển thị cho thời gian đã trôi qua
    const elapsedMin = Math.floor(elapsedSeconds / 60);
    const elapsedSec = elapsedSeconds % 60;
    setElapsedTime(
      `${elapsedMin}:${elapsedSec < 10 ? "0" + elapsedSec : elapsedSec}`
    );

    return () => clearInterval(interval); // Cleanup interval khi component bị unmount
  }, [isActive, seconds, elapsedSeconds]);

  return (
    <>
      <div className="progress-card" id="progress-card">
        <div className="progress-card-title">Trắc nghiệm EQ</div>
        <div className="text-bar">
          <span>
            Đã hoàn thành: {countt}/{list.length} câu
          </span>
          <span className="time-clock">Thời gian còn lại: {time}</span>
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
                  <img src={eq} alt="img" width={100} height={100}></img>
                  <span>EQ Test</span>
                </div>
                <p>
                  Bạn đã hoàn thành bài trắc nghiệm EQ. Kết quả của bạn là{" "}
                  {score}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
