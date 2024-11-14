import { Link } from "react-router-dom";

import image from "../../assets/images/iq.jpg"

export default function MBTI() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm IQ</div>

      <img src={image} className="img-detail align-center" />

      <div className="detail-txt font-20 margin-top-2rem">
      <span className="bold-txt">Chỉ số thông minh IQ</span> là từ viết tắt của từ <span className="bold-txt">Intelligence Quotient</span> thường được xem là có liên quan mật thiết tới thành công của một người trong cuộc sống, trong công việc và trong vấn đề học tập của mỗi con người.
      </div>

      <div className="detail-txt font-20">
        Căn cứ vào rất nhiều nghiên cứu thì những người có chỉ số IQ cao được xem là những người có khả năng thực hành, xử lý và phân tích chuỗi thông tin ở một mức độ chuyên sâu hơn và nhất là tốc độ của họ nhanh hơn so với những người có chỉ số IQ thấp hơn. Công cụ để đo IQ được sử dụng là những bài Test IQ, bài trắc nghiệm chỉ số IQ chính là phương pháp kiểm tra chỉ số thông minh IQ phổ biến nhất hiện nay được nhiều tổ chức kiểm tra chỉ số IQ trên thế giới thường sử dụng.
      </div>

      <div className="detail-txt font-20">
        Ngay sau khi hoàn thành xong bài kiểm tra chỉ số thông minh IQ trên thì dựa vào những chỉ số IQ, người ta sẽ chia như sau:
        <ul>
          <li>
            <span className="bold-txt">
              Chỉ số IQ Test nằm dưới 85:
            </span>{" "}
            thuộc loại thấp (khoảng 16%)
          </li>
          <li>
            <span className="bold-txt">
              Chỉ số IQ Test nằm khoảng 85-115:
            </span>{" "}
            thuộc loại bình thường (tỉ lệ khoảng 68%)
          </li>
          <li>
            <span className="bold-txt">
              Chỉ số IQ Test nằm khoảng 115-130:
            </span>{" "}
            thuộc loại thông minh (tỉ lệ khoảng 14%)
          </li>
          <li>
            <span className="bold-txt">
              Chỉ số IQ Test nằm khoảng 130-145:
            </span>{" "}
            thuộc loại rất thông minh (tỉ lệ khoảng 2%)
          </li>
          <li>
            <span className="bold-txt">
              Chỉ số IQ Test nằm khoảng 145 trở đi:
            </span>{" "}
            thiên tài hoặc cận thiên tài (tỉ lệ khoảng 0.1%)
          </li>
        </ul>
      </div>
      
      <Link to="/iq" className="primary-btn font-18 align-center margin-top-2rem">Kiểm tra ngay</Link>
    </body>
  );
}