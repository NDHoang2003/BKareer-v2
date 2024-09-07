import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import ProgressBar from "@ramonak/react-progress-bar";

import Card from "../components/Card.jsx";
import Panel from "../components/mbtiPanel.jsx";
import questions from "../database/MBTIQuest";
import perlist from "../database/MBTIPersonality";
import Result from "../database/Result.js";

function MBTITest() {
  const list = questions;
  // const perlist = require("../database/MBTIPersonality");
  const [per, setPer] = useState({});
  const Elist = ["1", "15", "29", "41", "57", "71", "85", "99", "113", "127"];
  const Ilist = ["2", "16", "30", "42", "58", "72", "86", "100", "114", "128"];
  const Slist = [
    "3",
    "17",
    "31",
    "45",
    "59",
    "73",
    "87",
    "101",
    "115",
    "129",
    "5",
    "19",
    "33",
    "47",
    "61",
    "75",
    "89",
    "103",
    "117",
    "131",
  ];
  const Nlist = [
    "4",
    "18",
    "32",
    "46",
    "60",
    "74",
    "88",
    "102",
    "116",
    "130",
    "6",
    "20",
    "34",
    "48",
    "62",
    "76",
    "90",
    "104",
    "118",
    "132",
  ];
  const Tlist = [
    "7",
    "21",
    "35",
    "49",
    "63",
    "77",
    "91",
    "105",
    "119",
    "133",
    "9",
    "23",
    "37",
    "51",
    "65",
    "79",
    "93",
    "107",
    "121",
    "135",
  ];
  const Flist = [
    "8",
    "22",
    "36",
    "50",
    "64",
    "78",
    "92",
    "106",
    "120",
    "134",
    "10",
    "24",
    "38",
    "52",
    "66",
    "80",
    "94",
    "108",
    "122",
    "136",
  ];
  const Jlist = [
    "11",
    "25",
    "39",
    "53",
    "67",
    "81",
    "95",
    "109",
    "123",
    "137",
    "13",
    "27",
    "41",
    "55",
    "69",
    "83",
    "97",
    "111",
    "125",
    "139",
  ];
  const Plist = [
    "12",
    "26",
    "40",
    "54",
    "68",
    "82",
    "96",
    "110",
    "124",
    "138",
    "14",
    "28",
    "42",
    "56",
    "70",
    "84",
    "98",
    "112",
    "126",
    "140",
  ];

  const result = () => {
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    let count = 0;
    let e = 0;
    let ii = 0;
    let s = 0;
    let n = 0;
    let t = 0;
    let f = 0;
    let j = 0;
    let p = 0;
    let arr = [];
    for (let i = 0; i < listAnswer.length; i++) {
      if (listAnswer[i].checked === true) {
        count++;
        if (listAnswer[i].id === "42") {
          p = p + 1;
        } else if (listAnswer[i].id === "41") {
          j = j + 1;
        }
        if (Elist.includes(listAnswer[i].id)) {
          e = e + 1;
        } else if (Ilist.includes(listAnswer[i].id)) {
          ii = ii + 1;
        } else if (Slist.includes(listAnswer[i].id)) {
          s = s + 1;
        } else if (Nlist.includes(listAnswer[i].id)) {
          n = n + 1;
        } else if (Tlist.includes(listAnswer[i].id)) {
          t = t + 1;
        } else if (Flist.includes(listAnswer[i].id)) {
          f = f + 1;
        } else if (Jlist.includes(listAnswer[i].id)) {
          j = j + 1;
        } else if (Plist.includes(listAnswer[i].id)) {
          p = p + 1;
        }
      }
    }
    for (let i = 0; i < listAnswer.length; i += 2) {
      if (
        listAnswer[i].checked === false &&
        listAnswer[i + 1].checked === false
      ) {
        arr.push(i / 2 + 1);
      }
    }
    let data = "";
    if (count < 70) {
      alert(`Bạn chưa hoàn thành bài kiểm tra ở các câu ${arr.join(", ")}`);
      return;
    } else {
      if (e > ii) {
        data = data + "E";
      } else if (e <= ii) {
        data = data + "I";
      }
      if (s > n) {
        data = data + "S";
      } else if (s <= n) {
        data = data + "N";
      }
      if (t > f) {
        data = data + "T";
      } else if (t <= f) {
        data = data + "F";
      }
      if (j > p) {
        data = data + "J";
      } else if (j <= p) {
        data = data + "P";
      }
      const re = perlist.getdata(data);

      setPer(re);
      document.querySelector(".Panel").style.display = "flex";

      Result.setMbti(data);
    }
  };
  const [progress, setProgress] = useState(0);
  const scrollToNext = (index) => {
    console.log("scrollToNext", index);
    const nextIndex = index + 1; // Lấy index kế tiếp
    const nextElement = document.querySelector(`div[id='div-${nextIndex}']`); // Tìm thẻ div với id chính xác
    console.log(nextElement);
    if (nextElement) {
      const rect = nextElement.getBoundingClientRect(); // Lấy vị trí của thẻ div so với viewport
      const offset = window.pageYOffset + rect.top - 280; // Tính vị trí so với toàn bộ tài liệu (document)

      // Cuộn tới vị trí chính xác, loại bỏ ảnh hưởng của padding/margin
      window.scrollTo({
        top: offset, // Cuộn đến vị trí chính xác của thẻ div
        behavior: "smooth",
      });
    }
    let count = 0;
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < listAnswer.length; i += 2) {
      if (
        listAnswer[i].checked === true ||
        listAnswer[i + 1].checked === true
      ) {
        count++;
      }
    }
    setProgress(Math.floor((count / 70) * 100));
  };
  return (
    <div>
      <div className="progress-card">
        <div className="mbti-title">Trắc nghiệm MBTI</div>

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
            onClick={() => scrollToNext(index)}
          >
            <Card Ques={item} key={item.content} />
          </div>
        ))}

        <div className="flex-row align-center width-fit-content">
          <Link
            to={`/majorResult?mbtiResult=${result}`}
            className="primary-btn font-18 width-45 margin-right-5rem"
          >
            Quay về nhập kết quả
          </Link>
          <button className="primary-btn font-18" onClick={result}>
            Xem kết quả
          </button>
        </div>
      </div>

      <Panel Data={per} />
    </div>
  );
}

export default MBTITest;
