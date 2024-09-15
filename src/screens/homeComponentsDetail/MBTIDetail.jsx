import { Link } from "react-router-dom";

import image from "../../assets/images/mbti.jpg"

export default function MBTI() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm MBTI</div>

      <img src={image} className="img-detail align-center" />

      <div className="detail-txt font-20 margin-top-2rem">
        Trắc nghiệm MBTI (Myers-Briggs Type Indication) là một hệ thống phân
        loại tính cách được phát triển từ những nghiên cứu về nhận thức và tính
        cách của nhà tâm lý học Carl Jung - bác sĩ tâm thần học người Thụy Sĩ,
        được hai nhà khoa học Katharine Cook Briggs và Isabel Briggs Myers hoàn
        thiện vào năm 1962.
      </div>

      <div className="detail-txt font-20">
        Trắc nghiệm này xác định và phân loại tính cách thành 16 tính cách MBTI,
        dựa trên bốn chiều yếu tố như sau:
        <ul>
          <li>
            <span className="bold-txt">
              Hướng ngoại (Extroversion) - Hướng nội (Introversion):
            </span>{" "}
            Cho biết cách một người thích tập trung vào thế giới bên ngoài hay
            thế giới bên trong của chính mình.
          </li>
          <li>
            <span className="bold-txt">
              Trực giác (iNtuition) - Cảm nhận (Sensing):
            </span>{" "}
            Xác định cách một người thu thập thông tin.
          </li>
          <li>
            <span className="bold-txt">
              Suy nghĩ (Thinking) - Cảm giác (Feeling):
            </span>{" "}
            Mô tả cách một người ra quyết định và đánh giá thông tin.
          </li>
          <li>
            <span className="bold-txt">
              Đánh giá (Judgement) - Nhận thức (Perception):
            </span>{" "}
            Mô tả cách một người tương tác với thế giới bên ngoài.
          </li>
        </ul>
      </div>

      <div className="detail-txt font-20">
        MBTI được ứng dụng nhiều trong việc: Xây dựng đội ngũ nhân viên, quản lý
        và đào tạo, đối phó với căng thẳng, giải quyết xung đột, đàm phán, hướng
        dẫn nghề nghiệp, xây dựng các mối quan hệ cá nhân tốt hơn.
      </div>
      
      <Link to="/mbti" className="primary-btn font-18 align-center margin-top-2rem">Kiểm tra ngay</Link>
    </body>
  );
}