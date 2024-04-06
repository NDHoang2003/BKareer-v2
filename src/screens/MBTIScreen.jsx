import { useState } from "react";

import MBTI from "../database/MBTI";

function MBTITest() {
  return (
    <>
      <body className="body">
        <div className="screen-title">Trắc nghiệm MBTI</div>
        {
          MBTI.map((item) => 
            <div className="MBTI-card">
              <div className="MBTI-question-txt">Câu {item.id}: {item.title}</div>
              <div className="flex-row flex-space-between">
                <button className='MBTI-option-btn font-18'>
                  {item.options[0].optionContent}
                </button>
                <button className='MBTI-option-btn font-18'>
                  {item.options[1].optionContent}
                </button>
              </div>
            </div>
          )
        }
        <button className="test-show-res-btn">Xem kết quả</button>
      </body>
    </>
  );
}

export default MBTITest;
