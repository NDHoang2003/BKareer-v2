import React from "react";
import { useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";

export default function Result() {
  const { currentUser } = useSelector((state) => state.user);
  const [mbti, setMbti] = React.useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [iq, setIq] = React.useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [eq, setEq] = React.useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [cc, setCc] = React.useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [lr, setLr] = React.useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [learn, setLearn] = React.useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [color, setColor] = React.useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [grit, setGrit] = React.useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [big5, setBig5] = React.useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });
  const [work, setWork] = React.useState({
    score: "Chưa làm",
    time: "Chưa làm",
    date: "Chưa làm",
  });

  const [loading, setLoading] = React.useState(true);

  const getMbti = async () => {
    try {
      const response = await fetch(
        `http://103.15.51.131:3000/api/score/mbti/${currentUser._id}`,
        {
          credentials: "include", // This allows credentials to be sent with the request
        }
      );
      const data = await response.json();
      if (data) {
        setMbti(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getCC = async () => {
    try {
      const response = await fetch(
        `http://103.15.51.131:3000/api/score/cc/${currentUser._id}`,
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data) {
        setCc(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getIQ = async () => {
    try {
      const response = await fetch(
        `http://103.15.51.131:3000/api/score/iq/${currentUser._id}`,
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data) {
        setIq(data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const getEQ = async () => {
    try {
      const response = await fetch(
        `http://103.15.51.131:3000/api/score/eq/${currentUser._id}`,
        {
          credentials: "include",
        }
      );
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
      const response = await fetch(
        `http://103.15.51.131:3000/api/score/lr/${currentUser._id}`,
        {
          credentials: "include",
        }
      );
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
        `http://103.15.51.131:3000/api/score/learningStyle/${currentUser._id}`,
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
      const response = await fetch(
        `http://103.15.51.131:3000/api/score/color/${currentUser._id}`,
        {
          credentials: "include",
        }
      );
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
      const response = await fetch(
        `http://103.15.51.131:3000/api/score/grit/${currentUser._id}`,
        {
          credentials: "include",
        }
      );
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
      const response = await fetch(
        `http://103.15.51.131:3000/api/score/bigfive/${currentUser._id}`,
        {
          credentials: "include",
        }
      );
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
        `http://103.15.51.131:3000/api/score/workstyle/${currentUser._id}`,
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

  React.useEffect(() => {
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
      
      <body className="mt-4" id="result-id-body">
        <div className="personal-result-table">
          <div className="bold-txt">Bài kiểm tra</div>
          <div className="bold-txt">Kết quả</div>
          <div className="bold-txt">Thời gian (phút)</div>
          <div className="bold-txt">Ngày thực hiện</div>
          <div>Trắc nghiệm tính cách MBTI</div>
          <div>{mbti.score}</div>
          <div>{mbti.time}</div>
          <div>{mbti.date}</div>
          <div>Khám phá năng lực nghề nghiệp</div>
          <div>{cc.score}</div>
          <div>{cc.time}</div>
          <div>{cc.date}</div>
          <div>Trắc nghiệm IQ</div>
          <div>{iq.score}</div>
          <div>{iq.time}</div>
          <div>{iq.date}</div>
          <div>Trắc nghiệm EQ</div>
          <div>{eq.score}</div>
          <div>{eq.time}</div>
          <div>{eq.date}</div>
          <div>Trắc nghiệm não trái - não phải</div>
          <div>{lr.score}</div>
          <div>{lr.time}</div>
          <div>{lr.date}</div>
          <div>Trắc nghiệm 3 thiên hướng học tập</div>
          <div>{learn.score}</div>
          <div>{learn.time}</div>
          <div>{learn.date}</div>
          <div>Trắc nghiệm 5 yếu tố tính cách</div>
          <div>{big5.score}</div>
          <div>{big5.time}</div>
          <div>{big5.date}</div>
          <div>Trắc nghiệm Phong Cách Làm Việc</div>
          <div>{work.score}</div>
          <div>{work.time}</div>
          <div>{work.date}</div>
          <div>Trắc nghiệm tính cách True Colors</div>
          <div>{color.score}</div>
          <div>{color.time}</div>
          <div>{color.date}</div>
          <div>Trắc nghiệm Thang đo Bền chí</div>
          <div>{grit.score}</div>
          <div>{grit.time}</div>
          <div>{grit.date}</div>
        </div>
      </body>
    </>
  );
}
