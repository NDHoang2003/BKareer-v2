import CC from "../database/CC";

function CCTest() {
  return (
    <>
      <body className="body">
        <div className="screen-title">Nhóm ngành yêu thích</div>
        <div className="CC-instruction-txt font-18">
          <span className="bold-txt">Hướng dẫn: </span>
          <span>Đánh dấu các mục trong mỗi ô mô tả chính xác nhất về bạn. Bạn có thể chọn một hoặc nhiều mục trong mỗi ô. Sau khi hoàn thành, hệ thống sẽ hiển thị kết quả ba ô có số điểm cao nhất và các Nhóm ngành tương ứng. Bạn cũng có thể xem thêm các Nhóm ngành khác để xem bạn có thể muốn khám phá những Nhóm ngành nào.</span>
        </div>
        {
          CC.map((item) => 
            <div className="CC-card flex-row flex-items-center">
              <div className="CC-card-title-txt">{item.title}</div>

              <div className="CC-activities-block flex-col flex-self-start">
                <div className="bold-txt font-20">Những hoạt động miêu tả những điều tôi thích làm:</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.activities.map((i) => i.num1)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.activities.map((i) => i.num2)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.activities.map((i) => i.num3)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.activities.map((i) => i.num4)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.activities.map((i) => i.num5)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.activities.map((i) => i.num6)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.activities.map((i) => i.num7)}</div>
              </div>

              <div className="CC-separate-line"></div>

              <div className="CC-qualities-block flex-col flex-self-start">
                <div className="bold-txt font-20">Các phẩm chất cá nhân miêu tả về tôi:</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.qualities.map((i) => i.num1)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.qualities.map((i) => i.num2)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.qualities.map((i) => i.num3)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.qualities.map((i) => i.num4)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.qualities.map((i) => i.num5)}</div>
              </div>

              <div className="CC-separate-line"></div>

              <div className="CC-subjects-block flex-col flex-self-start">
                <div className="bold-txt font-20">Môn học yêu thích của tôi:</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.subjects.map((i) => i.num1)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.subjects.map((i) => i.num2)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.subjects.map((i) => i.num3)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.subjects.map((i) => i.num4)}</div>
                <div className="font-18"><input type="checkbox" className="CC-checkbox"/>{item.subjects.map((i) => i.num5)}</div>
              </div>
            </div>
          )
        }
        <button className="test-show-res-btn">Xem kết quả</button>
      </body>
    </>
  );
}

export default CCTest;
