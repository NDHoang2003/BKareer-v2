import React from "react";
import { useState } from "react";

import Card from "../components/Card";
import Panel from "../components/lrBrainPanel";
import questions from "../database/LrBrainQuest";
import lrList from "../database/LrCharacteristic";

export default function LeftRightBrainTest() {
  const list = questions;
  const [brain, setBrain] = useState({});
  // const [loading, setLoading] = useState(true);

  const result = async () => {
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    let count = 0;
    let left = 0;
    let right = 0;
    let arr = [];

    // check selected options
    for (let i = 0; i < listAnswer.length; i++) {
      if (listAnswer[i].checked === true) {
        count++;
        if (listAnswer[i].id % 2) {
          left = left + 1;
        } else {
          right = right + 1;
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
      if (Math.abs(left - right) < 3) {
        data = "middle";
      } else if (left > right) {
        data = "left";
      } else {
        data = "right";
      }

      const res = lrList.getdata(data);
      document.querySelector(".Panel").style.display = "flex";
      setBrain(res);

      // try {
      //   if (currentUser) {
      //     const date = new Date().toLocaleString();
      //     const res = await fetch("http://localhost:3000/api/score/lrBrain", {
      //       method: "POST",
      //       credentials: "include",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         time: time,
      //         date: date,
      //         score: data,
      //       }),
      //     });
      //     const data2 = await res.json();
      //     if (data2) {
      //       setTimeout(() => {
      //         setLoading(false);
      //       }, 1000);
      //     }
      //   } else {
      //     setTimeout(() => {
      //       setLoading(false);
      //     }, 2000);
      //   }
      // } catch (error) {
      //   console.error("Error fetching data: ", error);
      //   setLoading(false);
      // }
    }
  };
  
  return (
    <>
      <body className="body">
        <div className="screen-title">Trắc nghiệm não trái - não phải</div>
        
        {list.map((item, index) => (
          <div
            id={`div-${index}`}
            key={item.content}
            onClick={() => scrollToNext()}
          >
            <Card Ques={item} key={item.content} index={index} />
          </div>
        ))}

        <button className="primary-btn font-18 align-center" onClick={result}>
          Xem kết quả
        </button>

        <Panel Data={brain} />
      </body>
    </>
  );
}
