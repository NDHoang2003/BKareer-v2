import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import WorkStylesPanel from "../components/workStylesPanel";
import WorkStylesQuest from "../database/WorkStylesQuest";
import WorkStyles from "../database/WorkStyles";

export default function WorkStylesTest() {
  const { currentUser } = useSelector((state) => state.user);

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [time, setTime] = useState("0:00");
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  // Initialize checkbox states for each trait within each quadrant
  const [checkboxStates, setCheckboxStates] = useState(
    WorkStylesQuest.map((quadrant) => Array(quadrant.traits.length).fill(false))
  );

  // Timer function
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

  // Handle checkbox state change
  const handleCheckboxChange = (quadrantIndex, traitIndex) => {
    setCheckboxStates((prevCheckboxStates) => {
      const newState = [...prevCheckboxStates];
      newState[quadrantIndex][traitIndex] =
        !newState[quadrantIndex][traitIndex];
      return newState;
    });
  };

  // Calculate score for each quadrant based on selected traits
  const calculateScore = () => {
    return checkboxStates.map((quadrantStates, quadrantIndex) =>
      quadrantStates.reduce(
        (total, isChecked, traitIndex) =>
          isChecked
            ? total + WorkStylesQuest[quadrantIndex].traits[traitIndex].score
            : total,
        0
      )
    );
  };

  // Find the highest scored style
  const findHighestScoredStyle = (scores) => {
    const highestScore = Math.max(...scores);
    return scores.indexOf(highestScore);
  };

  // Open the result panel and fetch user data if needed
  const handleOpenPanel = async () => {
    const scores = calculateScore();
    const highestScoredStyleIndex = findHighestScoredStyle(scores);

    // Ensure the selected style exists before setting it
    const style = WorkStyles.find(
      (item) => item.quadrant === highestScoredStyleIndex + 1
    );
    setSelectedStyle(style);
    setIsPanelOpen(true);
    setIsActive(false);

    if (currentUser) {
      try {
        const date = new Date().toLocaleString();
        const res = await fetch(
          "http://103.15.51.131:3000/api/score/workstyle",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: currentUser._id,
              time: time,
              date: date,
              score: style ? style.style : "N/A",
            }),
          }
        );
        const data = await res.json();
        if (data) {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className="progress-card flex-col flex-content-center flex-items-center"
        id="progress-card"
      >
        <div className="progress-card-title">
          Trắc nghiệm Phong Cách Làm Việc
        </div>
        <div className="text-bar">
          <span className="time-clock flex-content-center">
            Thời gian: {time}
          </span>
        </div>
        <div className="test-instruction-txt font-18">
          <span className="bold-txt">Hướng dẫn: </span>Đánh dấu các đặc điểm
          trong mỗi ô miêu tả chính xác nhất về bạn. Bạn có thể chọn một hoặc
          nhiều đặc điểm trong mỗi ô. Sau khi hoàn thành, hệ thống sẽ hiển thị
          kết quả phong cách có số điểm cao nhất.
        </div>
      </div>

      <body className="body shorten-top-body">
        {WorkStylesQuest.map((quadrant, quadrantIndex) => (
          <div
            className="WS-card flex-row flex-items-center"
            key={quadrantIndex}
          >
            <div className="WS-card-title-txt">{quadrant.title}</div>
            <div className="WS-card-description">{quadrant.description}</div>

            <div className="WS-traits-container">
              {quadrant.traits.map((trait, traitIndex) => (
                <div className="WS-trait" key={traitIndex}>
                  <input
                    type="checkbox"
                    className="WS-checkbox"
                    checked={checkboxStates[quadrantIndex][traitIndex]}
                    onChange={() =>
                      handleCheckboxChange(quadrantIndex, traitIndex)
                    }
                  />
                  {trait.trait}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex-row align-center width-fit-content">
          <button className="primary-btn font-18" onClick={handleOpenPanel}>
            Xem kết quả
          </button>
        </div>

        {isPanelOpen && (
          <WorkStylesPanel
            selectedStyle={selectedStyle}
            isOpen={isPanelOpen}
            loading={loading}
            onClose={handleClosePanel}
          />
        )}
      </body>
    </>
  );
}
