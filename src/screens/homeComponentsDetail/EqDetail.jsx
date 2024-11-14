import { Link } from "react-router-dom";

import image from "../../assets/images/eq.jpg"

export default function EQ() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm EQ</div>

      <img src={image} className="img-detail align-center" />

      <div className="detail-txt font-20 margin-top-2rem">
        <span className="bold-txt">EQ hay trí tuệ cảm xúc</span>, được dùng để đo lường khả năng sáng tạo, trí tưởng tượng của một người. Chỉ số EQ thể hiện khả năng nhận định, quản lý và điều chỉnh cảm xúc cá nhân và người khác. Thông thường, chỉ số cảm xúc sẽ được đo lường thông qua các bài test EQ.
      </div>

      <div className="detail-txt font-20">
      Theo nghiên cứu, người nào có trí tuệ cảm xúc cao thường là người có khả năng chịu được áp lực, luôn có thể giữ bình tĩnh trước mọi tình huống. Ngoài ra, EQ còn giúp xây dựng các mối quan hệ bền chặt hơn, rèn luyện lối suy nghĩ tích cực và khả năng đưa ra quyết định sáng suốt.
      </div>

      <div className="detail-txt font-20">
      Đối với bài test EQ của trang web sẽ có thang điểm như sau:
        <ul>
          <li>
            <span className="bold-txt">
              Chỉ số EQ Test nằm dưới 85:
            </span>{" "}
            Là nhóm người có EQ thấp, khả năng sáng tạo kém.
          </li>
          <li>
            <span className="bold-txt">
              Chỉ số EQ Test nằm khoảng 85-115:
            </span>{" "}
            Khoảng điểm EQ này là mức độ phổ biến nhất và chiếm đa số. Ở mức độ này, khả năng sáng tạo được đánh giá ở mức tương đối.
          </li>
          <li>
            <span className="bold-txt">
              Chỉ số EQ Test nằm khoảng 116-131:
            </span>{" "}
            Đây là nhóm người được đánh giá là có EQ cao.
          </li>
          <li>
            <span className="bold-txt">
              Chỉ số EQ Test nằm khoảng 131 trở đi:
            </span>{" "}
            Là chỉ số EQ đặc biệt mà rất ít người đạt được mức điểm này.
          </li>
        </ul>
      </div>
      
      <Link to="/eq" className="primary-btn font-18 align-center margin-top-2rem">Kiểm tra ngay</Link>
    </body>
  );
};
