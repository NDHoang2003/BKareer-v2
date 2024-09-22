import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar";

import Card from "../components/Card.jsx";
import Panel from "../components/mbtiPanel.jsx";
import questions from "../database/MBTIQuest";
import perlist from "../database/MBTIPersonality";
import Result from "../database/Result.js";

export default function MBTITest() {
  const list = questions;
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
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
  
  const result = async () => {
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
      const card = document.getElementById("progress-card");
      setIsActive(false);
      card.style.display = "none";
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
      document.querySelector(".Panel").style.display = "flex";
      try {
        if (currentUser) {
          const date = new Date().toLocaleString();
          const res = await fetch("http://localhost:3000/api/score/mbti", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              time: time,
              date: date,
              score: data,
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
      setPer(re);
      Result.setMbti(data);
    }
  };

  const [countt, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const scrollToNext = () => {
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
    setCount(count);
    setProgress(Math.floor((count / 70) * 100));
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
    return () => clearInterval(interval); // Cleanup interval khi component bị unmount
  }, [isActive, seconds]);

  return (
    <div>
      <div className="progress-card" id="progress-card">
        <div className="progress-card-title">Trắc nghiệm MBTI</div>
        <div className="text-bar">
          <span>Đã hoàn thành: {countt}/70 câu</span>
          <span className="time-clock">Thời gian: {time}</span>
        </div>
        <ProgressBar
          completed={progress}
          baseBgColor="white"
          bgColor="linear-gradient(to right, #003366, #66ccff)"
          className="progress-bar"
        />
      </div>

      <div className="body shorten-top-body">
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

      <Panel Data={per} loading={loading} />
    </div>
  );
};
