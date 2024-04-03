import MBTI from "../database/MBTI";

function MBTITest() {
  return (
    <>
      <body className="body">
        <div className="screen-title">Trắc nghiệm MBTI</div>
        {
          MBTI.map((item) => 
            <div className="MBTI-question-card">
              <div className="MBTI-question-txt">Câu {item.id}: {item.title}</div>
              <div className="flex-row flex-space-between">
                <button className="MBTI-option-btn">{item.option1}</button>
                <button className="MBTI-option-btn">{item.option2}</button>
              </div>
            </div>
          )
        }
        <button className="MBTI-show-res-btn">Xem kết quả</button>
      </body>
    </>
  );
}

export default MBTITest;
