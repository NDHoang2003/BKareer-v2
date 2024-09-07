import Card4 from "../../components/4Card";
import question from "../../database/IQQues.js";
import exit from "../../assets/remove.png";
import iq from "../../assets/iq-icon.png";
import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function IQ() {
  const list = question;
  const [progress, setProgress] = useState(0);
  const closeform = () => {
    document.querySelector(".Panel").style.display = "none";
    window.scrollTo(0, 0);
  };
  const [score, setScore] = useState("");
  const result = () => {
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    let count = 0;
    let sum = 0;
    for (let i = 0; i < listAnswer.length; i++) {
      if (listAnswer[i].checked === true) {
        count++;
        for (let j = 0; j < list.length; j++) {
          if (listAnswer[i].name === list[j].content) {
            if (listAnswer[i].id === list[j].key) {
              sum += 1;
            }
          }
        }
      }
    }
    if (count < list.length) {
      alert("Bạn chưa hoàn thành bài trắc nghiệm");
    } else {
      setScore(`${sum}/${list.length}`);
      document.querySelector(".Panel").style.display = "flex";
    }
  };
  const scrollToNext = (index) => {
    console.log("scrollToNext", index);
    const nextIndex = index + 1; // Lấy index kế tiếp
    const nextElement = document.querySelector(`div[id='div-${nextIndex}']`); // Tìm thẻ div với id chính xác

    if (nextElement) {
      const rect = nextElement.getBoundingClientRect(); // Lấy vị trí của thẻ div so với viewport
      const offset = window.pageYOffset + rect.top - 300; // Tính vị trí so với toàn bộ tài liệu (document)

      // Cuộn tới vị trí chính xác, loại bỏ ảnh hưởng của padding/margin
      window.scrollTo({
        top: offset, // Cuộn đến vị trí chính xác của thẻ div
        behavior: "smooth",
      });
    }
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
    setProgress(Math.floor((count / 20) * 100));
  };
  return (
    <>
      <div className="progress-card">
        <div className="mbti-title">Trắc nghiệm IQ</div>

        <ProgressBar
          completed={progress}
          baseBgColor="white"
          bgColor="linear-gradient(to right, #003366, #66ccff)"
          className="progress-bar"
        />
      </div>
      <body className="body iq-body">
        {list.map((item, index) => (
          <div
            id={`div-${index}`}
            key={item.content}
            onClick={() => scrollToNext(index)}
          >
            <Card4 Ques={item} key={item.content} />
          </div>
        ))}
        <div className="flex-row align-center width-fit-content">
          <button className="primary-btn font-18" onClick={result}>
            Xem kết quả
          </button>
        </div>
      </body>
      <div className="Panel">
        <div className="form_iq">
          <img
            src={exit}
            alt="exit_icon"
            width={30}
            height={30}
            className="img"
            onClick={closeform}
          ></img>
          <div className="panel_info">
            <div className="info">
              <div className="hero">
                <img src={iq} alt="img" width={100} height={100}></img>
                <span>IQ Test</span>
              </div>
              <p>
                Bạn đã hoàn thành bài trắc nghiệm IQ. Kết quả của bạn là {score}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IQ;
