import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar";

import Card from "../../components/Card3.jsx";
import Panel from "../../components/stylePanel.jsx";
import questions from "../../database/StyleQuest.js";
import { Visual, Auditory, Tactile } from "../../database/Styles.js";

function StyleTest() {
  const list = questions;
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [styleData, setStyleData] = useState(null);

  const VisualList = [
    "1",
    "4",
    "7",
    "10",
    "13",
    "16",
    "19",
    "22",
    "25",
    "28",
    "31",
    "34",
    "37",
    "40",
    "43",
    "46",
    "49",
    "52",
    "55",
    "58",
  ];
  const AuditoryList = [
    "2",
    "5",
    "8",
    "11",
    "14",
    "17",
    "20",
    "23",
    "26",
    "29",
    "32",
    "35",
    "38",
    "41",
    "44",
    "47",
    "50",
    "53",
    "56",
    "59",
  ];
  const TactileList = [
    "3",
    "6",
    "9",
    "12",
    "15",
    "18",
    "21",
    "24",
    "27",
    "30",
    "33",
    "36",
    "39",
    "42",
    "45",
    "48",
    "51",
    "54",
    "57",
    "60",
  ];

  const result = async () => {
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    let count = 0;
    let visual = 0;
    let auditory = 0;
    let tactile = 0;
    let arr = [];
    for (let i = 0; i < listAnswer.length; i++) {
      if (listAnswer[i].checked === true) {
        count++;
        // Count each style based on the correct ID ranges
        if (VisualList.includes(listAnswer[i].id)) {
          visual++;
        } else if (AuditoryList.includes(listAnswer[i].id)) {
          auditory++;
        } else if (TactileList.includes(listAnswer[i].id)) {
          tactile++;
        }
      }
    }
    for (let i = 0; i < listAnswer.length; i += 3) {
      if (
        listAnswer[i].checked === false &&
        listAnswer[i + 1].checked === false &&
        listAnswer[i + 2].checked === false
      ) {
        arr.push(i / 3 + 1);
      }
    }
    if (count < 20) {
      alert(`Please complete all questions. You missed: ${arr.join(", ")}`);
      return;
    } else {
      const card = document.getElementById("progress-card");
      setIsActive(false);
      card.style.display = "none";

      // Hide progress card and display the result panel with the determined learning style
      let resultStyle;
      if (visual > auditory && visual > tactile) {
        resultStyle = Visual;
      } else if (auditory > visual && auditory > tactile) {
        resultStyle = Auditory;
      } else {
        resultStyle = Tactile;
      }

      setStyleData(resultStyle); // Set the result style
      document.querySelector(".Panel").style.display = "flex";

      try {
        // Save the result to the server if the user is logged in
        if (currentUser) {
          const date = new Date().toLocaleString();
          const res = await fetch(
            "http://localhost:3000/api/score/learningStyle",
            {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                time: time,
                date: date,
                score: resultStyle,
              }),
            }
          );

          const data2 = await res.json();
          if (data2) {
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          }
        } else {
          // If the user is not logged in, delay the result panel display
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }

      // Simulate setting the result in the panel
      // Result.setLearningStyle(resultStyle);
    }
  };
  const [countt, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const scrollToNext = () => {
    let count = 0;
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < listAnswer.length; i += 3) {
      if (
        listAnswer[i].checked === true ||
        listAnswer[i + 1].checked === true ||
        listAnswer[i + 2].checked === true
      ) {
        count++;
      }
    }
    setCount(count);
    setProgress(Math.floor((count / 20) * 100)); // Adjust for 20 questions
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
    <div>
      <div className="progress-card" id="progress-card">
        <div className="progress-card-title">Trắc nghiệm Learning Style</div>
        <div className="text-bar">
          <span>- Bạn đã hoàn thành : {countt}/20 câu</span>
          <span className="time-clock"> Thời gian {time}</span>
        </div>
        <ProgressBar
          completed={progress}
          baseBgColor="white"
          bgColor="linear-gradient(to right, #003366, #66ccff)"
          className="progress-bar"
        />
      </div>
      <div className="body mbti-body">
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
      </div>

      <Panel Data={styleData} loading={loading} />
    </div>
  );
}

export default StyleTest;
