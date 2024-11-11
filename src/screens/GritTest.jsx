import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { BounceLoader } from "react-spinners";
import { useSelector } from "react-redux";
import Card5 from "../components/Card5"; // Reuse the 5-point card component for Grit Scale test
import gritQuestions from "../database/GritQuest.js"; // The Grit Scale test questions data
import exit from "../assets/remove.png";
import gritIcon from "../assets/images/grit-icon.png"; // An icon for Grit Scale test

export default function GritScaleTest() {
  const { currentUser } = useSelector((state) => state.user);
  const list = gritQuestions;
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState("");
  const [countt, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState("");

  const closeform = () => {
    document.querySelector(".Panel").style.display = "none";
    window.scrollTo(0, 0);
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

  const result = async () => {
    let listAnswer = document.querySelectorAll('input[type="radio"]:checked');
    let count = listAnswer.length; // Number of answers checked
    let totalScore = 0;
  
    // Loop through all checked answers and sum up their points
    listAnswer.forEach((answer) => {
      totalScore += parseInt(answer.id); // Sum up the points from the answerId (1-5 scale)
    });
  
    // If not all questions have been answered, show an alert
    if (count < list.length) {
      alert("Bạn chưa hoàn thành bài trắc nghiệm");
    } else {
      setIsActive(false); // Stop the timer
      const averageScore = (totalScore / 12).toFixed(2); // Calculate the average score (total points divided by 12)
      setScore(averageScore); // Set the final score
      document.querySelector(".Panel").style.display = "flex"; // Show the result panel

      // If the user is logged in, send the results to the backend
      try {
        if (currentUser) {
          const date = new Date().toLocaleString();
          const res = await fetch("http://localhost:3000/api/score/grit", {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              time: time,
              date: date,
              score: averageScore,
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


  const scrollToNext = () => {
    let count = 0;
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < listAnswer.length; i += 5) {
      if (
        listAnswer[i].checked === true ||
        listAnswer[i + 1].checked === true ||
        listAnswer[i + 2].checked === true ||
        listAnswer[i + 3].checked === true ||
        listAnswer[i + 4].checked === true
      ) {
        count++;
      }
    }
    setCount(count);
    setProgress(Math.floor((count / list.length) * 100));
  };

  return (
    <>
      <div className="progress-card" id="progress-card">
        <div className="progress-card-title">Bài Kiểm Tra Grit Scale</div>
        <div className="text-bar">
          <span>Đã hoàn thành: {countt}/{list.length} câu</span>
          <span className="time-clock">Thời gian: {time}</span>
        </div>
        <ProgressBar
          completed={progress}
          baseBgColor="white"
          bgColor="linear-gradient(to right, #003366, #66ccff)"
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
            <Card5 Ques={item} key={item.content} index={index} />
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
          cssOverride={{
            display: "block",
            margin: "0 auto",
            borderColor: "#04BCFC",
            padding: "20px",
          }}
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
                <div className="hero">
                  <img src={gritIcon} alt="img" width={100} height={100} />
                  <span>Bài Kiểm Tra Grit Scale</span>
                </div>
                <p>
                  Bạn đã hoàn thành bài kiểm tra Grit Scale. Kết quả của bạn là {score}.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
