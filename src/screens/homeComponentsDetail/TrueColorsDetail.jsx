import { Link } from "react-router-dom";

import image from "../../assets/images/trueColors.jpeg";

export default function TrueColors() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Bài kiểm tra tính cách True Colors</div>
      
      <img src={image} className="img-detail align-center" />

      <div className="detail-txt font-20 margin-top-2rem">
        <span className="bold-txt">Bài kiểm tra tính cách True Colors</span> - được Don Lowry phát triển vào năm 1978 dựa trên công trình của David Keirsey và Chỉ số loại hình Myers-Briggs (MBTI) - là một công cụ đánh giá tính cách nhằm giúp mọi người hiểu rõ hơn về bản thân và người khác bằng cách phân loại tính cách thành bốn màu chính: Xanh Lam, Xanh Lá, Cam và Vàng. Mỗi màu đại diện cho một tập hợp riêng biệt các đặc điểm, giá trị và sở thích.
      </div>

      <div className="detail-txt font-20">
        Bài kiểm tra tính cách True Colors thường được sử dụng để phát triển bản thân và tự nhận thức, giúp mọi người hiểu rõ hơn về điểm mạnh, điểm yếu và sở thích giao tiếp của chính mình. Bằng cách xác định màu sắc chủ đạo của mình, mọi người có thể đưa ra quyết định sáng suốt hơn trong nhiều khía cạnh của cuộc sống, chẳng hạn như lựa chọn nghề nghiệp, mối quan hệ và đặt mục tiêu.
      </div>

      <div className="detail-txt font-20">
        Mỗi kết quả màu sắc trong bài kiểm tra True Colors được cho là tương ứng với một số đặc điểm tính cách nhất định:
        <ul>
          <li>
            <span className="bold-txt">
              Màu Cam:
            </span>{" "}
            Đại diện cho sự năng động và phấn khích: là người yêu thích sự vui vẻ, hài hước, dí dỏm và quyến rũ.
          </li>
          <li>
            <span className="bold-txt">
              Màu Xanh Lá:
            </span>{" "}
            Đại diện cho các hệ thống có trật tự, giống như những gì tìm thấy trong tự nhiên: là người khát khao tri thức, logic, trí tuệ, triết lý.
          </li>
          <li>
            <span className="bold-txt">
              Màu Xanh Lam:
            </span>{" "}
            Đại diện cho cường độ cảm xúc và tâm linh: là người thích giao tiếp xã hội, luôn tìm cách kết nối với người khác và có thể chủ động tìm cách giải quyết khi có xung đột.
          </li>
          <li>
            <span className="bold-txt">
              Màu vàng:
            </span>{" "}
            Đại diện cho sự chân thực, tin cậy và truyền thống: là người thích trật tự, thống nhất, coi trọng sự chính trực và trách nhiệm, có thể là những người bạn/nhân viên đáng tin cậy.
          </li>
        </ul>
      </div>

      <Link to="/trueColors" className="primary-btn font-18 align-center margin-top-2rem">Kiểm tra ngay</Link>
    </body>
  );
};
