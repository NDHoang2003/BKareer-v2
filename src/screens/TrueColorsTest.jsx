import React from "react";

import TCQuests from "./../database/TrueColorsQuest";
import TCPanel from "../components/TCPanel";
import TrueColorsRes from "../database/TrueColorsRes";

export default function TrueColorsTest() {
  let initialAnswers = new Array(44).fill(0);
  
  const [answer, setAnswer] = React.useState(initialAnswers);

  const handleInputChange = (questionIndex, answerId, input) => {
    setAnswer(questionIndex * 4 + answerId, input);
  };

  const [res, setRes] = React.useState({});

  const result = async () => {
    // Kiểm tra đã hoàn thành bài kiểm tra hay chưa
    let unfinished = [];

    for (let i = 0; i < answer.length; i++) {
      if (answer[i] == 0) {
        unfinished.push(floor(i / 4) + 1);
      }
    };

    if (unfinished.length > 0) {
      React.alert(`Bạn chưa hoàn thành bài kiểm tra ở các câu ${unfinished.join(", ")}`);
      return;
    }

    // Tính điểm
    let orangeSum, greenSum, blueSum, goldSum;

    for (let i = 0; i < answer.length; i + 4) {
      orangeSum += answer[i];
    };
    for (let i = 1; i < answer.length; i + 4) {
      greenSum += answer[i];
    };
    for (let i = 2; i < answer.length; i + 4) {
      blueSum += answer[i];
    };
    for (let i = 3; i < answer.length; i + 4) {
      goldSum += answer[i];
    };

    // Tìm max => Phân loại màu
    let maxColor = [orangeSum, greenSum, blueSum, goldSum];
    let data = ["orange", "green", "blue", "gold"];

    for (let i = 0; i < maxColor.length; i++) {
      for (let j = i + 1; j < maxColor.length; j++) {
        if (maxColor[i] < maxColor[j]) {
          maxColor[i] = maxColor[i] + maxColor[j];
          maxColor[j] = maxColor[i] - maxColor[j];
          maxColor[i] = maxColor[i] - maxColor[j];
          let temp = data[i];
          data[i] = data[j];
          data[j] = temp;
        }
      }
    };

    data = data[0];
    
    const re = TrueColorsRes.getdata(data);
    document.querySelector(".Panel").style.display = "flex";
    setRes(re);
  };
  
  return (
    <>
      <div className="progress-card flex-col flex-content-center flex-items-center" id="progress-card">
        <div className="progress-card-title">Bài kiểm tra tính cách True Colors</div>
        <div className="text-bar">
          <span className="time-clock">Thời gian: time here</span>
        </div>
        <div className="test-instruction-txt font-18">
          <span className="bold-txt">Hướng dẫn: </span>
          <span>
            Dưới đây là 11 câu chưa hoàn chỉnh mô tả về con người. Mỗi câu có
            bốn kết thúc có thể. Hãy chấm 4 điểm cho cụm từ "giống bạn nhất",
            3 điểm cho cụm từ "giống bạn thứ hai", 2 điểm cho cụm từ tiếp
            theo và 1 điểm cho cụm từ "không giống bạn nhất".
          </span>
        </div>
      </div>

      <body className="body shorten-top-body">
        <div>
          {TCQuests.map((item, index) => (
            <div className="question-card">
              <h1>{item.content}</h1>
              <div className="font-18">
                <input
                  id={1}
                  value={answer[index * 4]}
                  type="text"
                  pattern="[1-4]"
                  onInput={(e) => {
                    handleInputChange(index, 0, e);
                  }}
                  className="TC-input"
                />
                {item.answers[0].answerContent}
              </div>

              <div className="font-18">
                <input
                  id={2}
                  value={answer[index * 4 + 1]}
                  type="text"
                  pattern="[1-4]"
                  onInput={(e) => {
                    handleInputChange(index, 1, e);
                  }}
                  className="TC-input"
                />
                {item.answers[1].answerContent},
              </div>

              <div className="font-18">
                <input
                  id={3}
                  value={answer[index * 4 + 2]}
                  type="text"
                  pattern="[1-4]"
                  onInput={(e) => {
                    handleInputChange(index, 2, e);
                  }}
                  className="TC-input"
                />
                {item.answers[2].answerContent}
              </div>

              <div className="font-18">
                <input
                  id={4}
                  value={answer[index * 4 + 3]}
                  type="text"
                  pattern="[1-4]"
                  onInput={(e) => {
                    handleInputChange(index, 3, e);
                  }}
                  className="TC-input"
                />
                {item.answers[3].answerContent}
              </div>
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

          <TCPanel Data={res} loading={false}/>
        </div>
      </body>
    </>
  );
}
