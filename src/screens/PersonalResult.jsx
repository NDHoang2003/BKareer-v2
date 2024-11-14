import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

export default function PersonalResult() {
  const { currentUser } = useSelector((state) => state.user);
  const [mbti, setMbti] = useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [iq, setIq] = useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [eq, setEq] = useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [cc, setCc] = useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [lr, setLr] = useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [learn, setLearn] = useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [color, setColor] = useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [grit, setGrit] = useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [big5, setBig5] = useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [work, setWork] = useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [loading, setLoading] = useState(true);
  const getMbti = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/score/mbti", {
        credentials: "include", // This allows credentials to be sent with the request
      });
      const data = await response.json();
      if (data) {
        setMbti(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getIQ = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/score/iq", {
        credentials: "include",
      });
      const data = await response.json();
      if (data) {
        setIq(data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getCC = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/score/cc", {
        credentials: "include",
      });
      const data = await response.json();
      if (data) {
        setCc(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getEQ = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/score/eq", {
        credentials: "include",
      });
      const data = await response.json();
      if (data) {
        setEq(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getLR = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/score/lr", {
        credentials: "include",
      });
      const data = await response.json();
      if (data) {
        setLr(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getLearn = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/score/learningStyle",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data) {
        setLearn(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getColor = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/score/color", {
        credentials: "include",
      });
      const data = await response.json();
      if (data) {
        setColor(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getGrit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/score/grit", {
        credentials: "include",
      });
      const data = await response.json();
      if (data) {
        setGrit(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getBigFive = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/score/bigfive", {
        credentials: "include",
      });
      const data = await response.json();
      if (data) {
        setBig5(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getWork = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/score/workstyle",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data) {
        setWork(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    document.getElementById("result-id").style.display = "flex";
    document.getElementById("result-id-body").style.display = "none";
    setTimeout(() => {
      getMbti();
      getCC();
      getIQ();
      getEQ();
      getLR();
      getLearn();
      getColor();
      getGrit();
      getBigFive();
      getWork();
    }, 1000);
    setTimeout(() => {
      setLoading(false);
      document.getElementById("result-id").style.display = "none";
      document.getElementById("result-id-body").style.display = "block";
    }, 1000);
  }, []);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#04BCFC",
    padding: "20px",
  };
  return (
    <>
      <div className="Panel" id="result-id">
        <BounceLoader
          loading={loading}
          size={150}
          color="#50d1ff"
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={override}
        />
      </div>
      <body className="body screen-block background-img" id="result-id-body">
        <div className="gradient"></div>
        <div className="personal-header">
          <span className="screen-title">Kết quả cá nhân : </span>
          <div className="img-per">
            <img
              src={currentUser.avatar}
              alt="profile"
              className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
            />
            <span className="screen-title dark-blue">
              {currentUser.username}
            </span>
          </div>
        </div>
        <div className="personal-result-table">
          <div>Loại bài kiểm tra</div>
          <div>Kết quả</div>
          <div>Thời gian làm (phút)</div>
          <div>Ngày thực hiện</div>
          <div>- MBTI -</div>
          <div>{mbti.score}</div>
          <div>{mbti.time}</div>
          <div>{mbti.date}</div>
          <div>- Career Clustering -</div>
          <div>{cc.score}</div>
          <div>{cc.time}</div>
          <div>{cc.date}</div>
          <div>- IQ TEST -</div>
          <div>{iq.score}</div>
          <div>{iq.time}</div>
          <div>{iq.date}</div>
          <div>- EQ TEST -</div>
          <div>{eq.score}</div>
          <div>{eq.time}</div>
          <div>{eq.date}</div>
          <div>- LeftRight Brain TEST -</div>
          <div>{lr.score}</div>
          <div>{lr.time}</div>
          <div>{lr.date}</div>
          <div>- Learning Style -</div>
          <div>{learn.score}</div>
          <div>{learn.time}</div>
          <div>{learn.date}</div>
          <div>- Color -</div>
          <div>{color.score}</div>
          <div>{color.time}</div>
          <div>{color.date}</div>
          <div>- Grit -</div>
          <div>{grit.score}</div>
          <div>{grit.time}</div>
          <div>{grit.date}</div>
          <div>- Big Five -</div>
          <div>{big5.score}</div>
          <div>{big5.time}</div>
          <div>{big5.date}</div>
          <div>- Work Style -</div>
          <div>{work.score}</div>
          <div>{work.time}</div>
          <div>{work.date}</div>
        </div>
      </body>
    </>
  );
}
