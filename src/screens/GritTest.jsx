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

  const [evaluationMessage, setEvaluationMessage] = useState("");

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

      // Determine the evaluation message based on the score
      let message = "";
      if (averageScore < 1) {
        message = `
    Điểm của bạn cho thấy bạn là một người thiếu bền chí và dễ dàng bỏ cuộc. Có thể bạn gặp khó khăn trong việc duy trì động lực và hay cảm thấy nản lòng khi đối diện với thử thách hoặc khi mọi thứ không diễn ra theo ý muốn. Hãy cố gắng cải thiện bằng cách đặt ra những mục tiêu nhỏ, kiên trì thực hiện từng bước, học cách đón nhận khó khăn và giữ vững quyết tâm. Nhớ rằng, người kiên trì không phải là người không bao giờ thất bại, mà là người không bỏ cuộc sau mỗi thất bại. Bắt đầu với những thay đổi nhỏ và giữ vững sự cam kết sẽ giúp bạn phát triển sự bền chí từng bước một.
  `;
      } else if (averageScore < 2 && averageScore >= 1) {
        message = `
    Điểm của bạn cho thấy bạn có thể phát triển thêm sự bền chí của mình. Đôi khi bạn có thể cảm thấy chùn bước trước những khó khăn hoặc khi mục tiêu trở nên quá thách thức, nhưng bạn có thể thay đổi điều này. Hãy tập trung kiên nhẫn vượt qua các thử thách và xem mỗi thất bại là cơ hội để học hỏi. Đặt ra các mục tiêu nhỏ, kiên trì hoàn thành từng bước và bạn sẽ dần thấy sự tiến bộ của mình. Với sự nỗ lực và kiên nhẫn, bạn sẽ ngày càng kiên cường và có động lực để đạt được những mục tiêu lớn hơn.
  `;
      } else if (averageScore < 3 && averageScore >= 2) {
        message = `
    Bạn đã có nền tảng vững vàng về sự bền chí, cho thấy khả năng đối mặt với các thách thức một cách kiên cường. Bạn có thể vượt qua nhiều khó khăn và tiếp tục tiến bước ngay cả khi mọi việc trở nên khó khăn. Tuy nhiên, bạn vẫn còn nhiều tiềm năng phát triển. Hãy giữ vững tinh thần này và cố gắng đẩy mạnh hơn nữa sự kiên trì của mình khi gặp phải thử thách lớn. Đừng ngần ngại thử sức với những mục tiêu cao hơn để rèn luyện khả năng chịu đựng. Với mỗi thử thách vượt qua, bạn sẽ càng mạnh mẽ hơn.
  `;
      } else if (averageScore < 4 && averageScore >= 3) {
        message = `
    Bạn đang làm rất tốt! Sự bền chí của bạn là một điểm mạnh giúp bạn vượt qua khó khăn hiệu quả. Bạn không dễ dàng bỏ cuộc và luôn có động lực để hoàn thành mục tiêu bất chấp trở ngại. Hãy tiếp tục phát huy tinh thần này, cố gắng duy trì sự kiên cường trong những tình huống căng thẳng. Đặt ra những thử thách mới và mở rộng giới hạn bản thân, điều này sẽ giúp bạn phát triển hơn nữa. Sự bền chí của bạn là phẩm chất đáng quý giúp bạn đối mặt và chinh phục mọi khó khăn.
  `;
      } else {
        message = `
    Tuyệt vời, bạn sở hữu một mức độ bền chí cao nhất! Không có gì có thể ngăn cản bạn trên con đường chinh phục mục tiêu. Bạn là một người kiên cường, không dễ bị đánh bại trước khó khăn, và luôn sẵn sàng vượt qua thử thách. Hãy giữ vững sự kiên định này và thử sức với những mục tiêu lớn hơn để phát huy tối đa tiềm năng của mình. Không chỉ là một người mạnh mẽ, bạn còn là nguồn cảm hứng cho mọi người xung quanh. Hãy tiếp tục chia sẻ kinh nghiệm và truyền động lực cho những người khác để giúp họ cũng phát triển sự bền chí.
  `;
      }

      setEvaluationMessage(message);

      setLoading(false);

      // If the user is logged in, send the results to the backend
      try {
        if (currentUser) {
          const date = new Date().toLocaleString();
          const res = await fetch("http://103.15.51.131:3000/api/score/grit", {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: currentUser._id,
              time: time,
              date: date,
              score: averageScore,
            }),
          });
          const data2 = await res.json();
          if (data2) {
            setTimeout(() => {
              setLoading(false);
              document.querySelector(".Panel").style.display = "flex";
            }, 1000);
          }
        } else {
          setTimeout(() => {
            setLoading(false);
            document.querySelector(".Panel").style.display = "flex";
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
        <div className="progress-card-title">Trắc nghiệm Thang đo Bền chí</div>
        <div className="text-bar">
          <span>
            Đã hoàn thành: {countt}/{list.length} câu
          </span>
          <span className="time-clock">Thời gian: {time}</span>
        </div>
        <ProgressBar
          completed={progress}
          baseBgColor="white"
          bgColor="linear-gradient(to right, #00bdfc, #a3e8ff)"
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
                  Bạn đã hoàn thành bài kiểm tra Grit Scale. Kết quả của bạn là{" "}
                  {score}.
                </p>
                <p className="evaluation-message">{evaluationMessage}</p>{" "}
                {/* Placeholder for evaluation message */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
