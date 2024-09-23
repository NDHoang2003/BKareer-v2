import React from "react";

const LearningStyleCard = ({ Ques, index, scrollToNext }) => {
  const onSelected = (answerId) => {
    var radioInput = document.getElementById(answerId);
    radioInput.checked = true;

    let list = document.getElementsByName(Ques.content);
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === answerId) {
        list[i].checked = true;
        let answerItem = document.getElementById(list[i].id).parentElement;
        answerItem.classList.add("selected");
      } else {
        list[i].checked = false;
        let answerItem = document.getElementById(list[i].id).parentElement;
        answerItem.classList.remove("selected");
      }
    }

    const nextIndex = index + 1;
    const nextElement = document.querySelector(`div[id='div-${nextIndex}']`);
    if (nextElement) {
      const rect = nextElement.getBoundingClientRect();
      const offset = window.pageYOffset + rect.top - 280;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="question-card">
      <h1>{Ques.content}</h1>
      <div className="answer-form">
        {Ques.answers.map((answer, i) => (
          <div
            key={answer.answerId}
            className="answer-item"
            onClick={() => onSelected(answer.answerId)}
          >
            <input
              type="radio"
              name={Ques.content}
              id={answer.answerId}
              className="input"
              onClick={() => onSelected(answer.answerId)}
            />
            <label htmlFor={answer.answerId}>
              {String.fromCharCode(65 + i)}. {answer.answerContent}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningStyleCard;
