const Card4 = ({ Ques }) => {
  const onSelected = (answerId) => {
    let list = document.getElementsByName(Ques.content);
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === answerId) {
        list[i].checked = true;
        let answerItem = list[i].parentElement;
        answerItem.classList.add("selected");
      } else {
        list[i].checked = false;
        let answerItem = list[i].parentElement;
        answerItem.classList.remove("selected");
      }
    }
  };
  return (
    <>
      <div className="question-card">
        <h1>{Ques.content}</h1>
        <div className="answer-form">
          <div
            className="answer-item-4"
            onClick={() => onSelected(Ques.answers[0].answerId)}
            name={Ques.content}
          >
            <input
              type="radio"
              className="input"
              name={Ques.content}
              id={Ques.answers[0].answerId}
              onClick={() => onSelected(Ques.answers[0].answerId)}
              key={Ques.answers[0].answerId}
            />
            <label htmlFor="answer1">{Ques.answers[0].answerContent}</label>
          </div>
          <div
            className="answer-item-4"
            onClick={() => onSelected(Ques.answers[1].answerId)}
            name={Ques.content}
          >
            <input
              type="radio"
              className="input"
              name={Ques.content}
              id={Ques.answers[1].answerId}
              onClick={() => onSelected(Ques.answers[1].answerId)}
              key={Ques.answers[1].answerId}
            />
            <label htmlFor="answer2">{Ques.answers[1].answerContent}</label>
          </div>
          <div
            className="answer-item-4"
            onClick={() => onSelected(Ques.answers[2].answerId)}
            name={Ques.content}
          >
            <input
              type="radio"
              className="input"
              name={Ques.content}
              id={Ques.answers[2].answerId}
              onClick={() => onSelected(Ques.answers[2].answerId)}
              key={Ques.answers[2].answerId}
            />
            <label htmlFor="answer2">{Ques.answers[2].answerContent}</label>
          </div>
          <div
            className="answer-item-4"
            onClick={() => onSelected(Ques.answers[3].answerId)}
            name={Ques.content}
          >
            <input
              type="radio"
              className="input"
              name={Ques.content}
              id={Ques.answers[3].answerId}
              onClick={() => onSelected(Ques.answers[3].answerId)}
              key={Ques.answers[3].answerId}
            />
            <label htmlFor="answer2">{Ques.answers[3].answerContent}</label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card4;
