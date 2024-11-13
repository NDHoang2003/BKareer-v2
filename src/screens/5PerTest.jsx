import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { BounceLoader } from "react-spinners";
import { useSelector } from "react-redux";
import Card5 from "../components/Card5"; 
import question from "../database/5PerQuest.js"; 
import exit from "../assets/remove.png";
import personalityData from "../database/5Per.js"; 

export default function BigFiveTest() {
  const { currentUser } = useSelector((state) => state.user);
  const list = question; // List of Big Five test questions
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState("");
  const [countt, setCount] = useState(0); // Number of answered questions
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState("");

  const queryName = (name, list) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].content === name) {
        return parseInt(list[i].index);
      }
    }
    return 0;
  };

  // Handle closing the results panel
  const closeform = () => {
    document.querySelector(".Panel").style.display = "none";
    window.scrollTo(0, 0);
  };

  // Timer logic for time spent on the test
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
    return () => clearInterval(interval); // Cleanup interval when component is unmounted
  }, [isActive, seconds]);

  const [personalityMessage, setPersonalityMessage] = useState("");

  // Calculate and display the test result
  const result = async () => {
    let listAnswer = document.querySelectorAll('input[type="radio"]:checked');
    let count = listAnswer.length; 
    let scores = { E: 0, A: 0, C: 0, N: 0, O: 0 }; 
  
    listAnswer.forEach((answer) => {
      const index = queryName(answer.name, question);
      const value = parseInt(answer.id); // Get the value (1-5) from the answer id
      // Apply the scoring for each dimension based on the index of the question
      switch (true) {
        case index === 1 ||
          index === 6 ||
          index === 11 ||
          index === 16 ||
          index === 21 ||
          index === 26 ||
          index === 31 ||
          index === 36 ||
          index === 41 ||
          index === 46:
          scores.E += (index % 2 === 0 ? -1 : 1) * value;
          break;
        case index === 2 ||
          index === 7 ||
          index === 12 ||
          index === 17 ||
          index === 22 ||
          index === 27 ||
          index === 32 ||
          index === 37 ||
          index === 42 ||
          index === 47:
          scores.A += (index % 2 === 0 ? -1 : 1) * value;
          break;
        case index === 3 ||
          index === 8 ||
          index === 13 ||
          index === 18 ||
          index === 23 ||
          index === 28 ||
          index === 33 ||
          index === 38 ||
          index === 43 ||
          index === 48:
          scores.C += (index % 2 === 0 ? -1 : 1) * value;
          break;
        case index === 4 ||
          index === 9 ||
          index === 14 ||
          index === 19 ||
          index === 24 ||
          index === 29 ||
          index === 34 ||
          index === 39 ||
          index === 44 ||
          index === 49:
          scores.N += (index % 2 === 0 ? -1 : 1) * value;
          break;
        case index === 5 ||
          index === 10 ||
          index === 15 ||
          index === 20 ||
          index === 25 ||
          index === 30 ||
          index === 35 ||
          index === 40 ||
          index === 45 ||
          index === 50:
          scores.O += (index % 2 === 0 ? -1 : 1) * value;
          break;
        default:
          break;
      }
    });
  
    if (count < question.length) {
      alert("Bạn chưa hoàn thành bài trắc nghiệm");
    } else {
      setIsActive(false);
      setScore(`E: ${scores.E}, A: ${scores.A}, C: ${scores.C}, N: ${scores.N}, O: ${scores.O}`);
  
      // Find the highest scoring trait
      const highestScoreKey = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
      );
      setPersonalityMessage(personalityData[highestScoreKey]);
  
      document.querySelector(".Panel").style.display = "flex";
  
      try {
        if (currentUser) {
          const date = new Date().toLocaleString();
          const res = await fetch("http://localhost:3000/api/score/bigfive", {
            credentials: "include",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ time, date, scores }),
          });
          const data2 = await res.json();
          if (data2) setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    }
  
    return personalityMessage; // Return the message to use in the UI
  };

  // Handle scrolling to next question
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
        <div className="progress-card-title">Bài Kiểm Tra Big Five</div>
        <div className="text-bar">
          <span>
            Đã hoàn thành: {countt}/{list.length} câu
          </span>
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
                  <img src={personalityMessage.img} alt="img" width={100} height={100} />
                  <span>{personalityMessage.title}</span>
                </div>
                <table className="style-table">
                  <tbody>
                    <tr>
                      <th className="table-heading">Điểm mạnh</th>
                      <td>{personalityMessage.strengths}</td>
                    </tr>
                    <tr>
                      <th className="table-heading">Điểm yếu</th>
                      <td>{personalityMessage.weaknesses}</td>
                    </tr>
                    <tr>
                      <th className="table-heading">Lời khuyên</th>
                      <td>{personalityMessage.advice}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  );
}
