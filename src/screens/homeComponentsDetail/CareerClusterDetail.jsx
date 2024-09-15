import { Link } from "react-router-dom";

import image from "../../assets/images/cc.png"

export default function CC() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm khám phá năng lực nghề nghiệp</div>

      <img src={image} className="img-detail align-center" />

      <div className="detail-txt font-20 margin-top-2rem">
        Bài trắc nghiệm khám phá năng lực nghề nghiệp – Career Clusters Interest Survey được Trung tâm hướng nghiệp và công nghệ Oklahama Hoa Kỳ (Career Clusters Interest Survey, Oklahoma Department of Career and Technology Education) xây dựng dựa trên tư liệu của tổ chức Advance CTE (Mỹ).
      </div>

      <div className="detail-txt font-20">
        Đây là bài đánh giá dựa trên yếu tố cá tính, sở thích, năng lực liên quan trực tiếp đến các nhóm nghề nghiêp, được xây dựng bởi những học giả có chuyên môn được đào tạo về hướng nghiệp và kết quả trắc nghiệm đã được kiểm chứng. Các bài trắc nghiệm này hiện được dùng trong chương trình hướng nghiệp của dự án Thế giới ngoài cửa lớp. 
      </div>
      
      <Link to="/career" className="primary-btn font-18 align-center margin-top-2rem">Kiểm tra ngay</Link>
    </body>
  );
}