import { Link } from "react-router-dom";

import image from "../../assets/images/learningStyle.png"

export default function LearningStyle() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm 3 thiên hướng học tập</div>

      <img src={image} className="img-detail align-center" />

      <div className="detail-txt font-20 margin-top-2rem">
        <span className="bold-txt">Trắc nghiệm 3 thiên hướng học tập Vak</span> là bài tập trắc nghiệm xác định thiên hướng học tập. Mô hình này cho rằng mỗi cá nhân sẽ có một cách học tập lí tưởng và đạt được các hiệu quả khác nhau. Khái niệm VAK lần đầu tiên được phát triển bởi các nhà tâm lí học và các chuyên gia giảng dạy trẻ em như Fernald, Keller, Orton, Gillingham, Stillman và Montessori từ những năm 1920.
      </div>

      <div className="detail-txt font-20">
        Mô hình phong cách học tập VAK thông qua bài trắc nghiệm 20 câu hỏi để đánh giá phong cách học tập ưa thích, tìm ra tỉ lệ giữa 3 thiên hướng học tập bao gồm trực quan, thính giác và xúc giác. Sau đó, VAK tiếp tục thiết kế phương pháp học tập cũng như các loại trải nghiệm phù hợp cho từng cá nhân dựa trên kết quả tỉ lệ phần trăm đó.
      </div>

      <div className="detail-txt font-20">
        Đặc điểm thiên hướng/ phong cách chính của VAK:
        <ul>
          <li>
            <span className="bold-txt">Visual - trực quan:</span>{" "}
            Liên quan đến việc sử dụng những thứ đã nhìn thấy hoặc quan sát được, bao gồm hình ảnh, sơ đồ, minh họa, màn hình, tài liệu phát tay, phim,... → Nhóm những bạn có thiên hướng học tốt thông qua việc quan sát, có khả năng xử lí thông tin tốt qua đọc biểu đồ và dựa trên hình ảnh minh họa để hiểu rõ khái niệm bài học.
          </li>
          <li>
            <span className="bold-txt">Audiory - thính giác:</span>{" "}
            Liên quan đến việc chuyển giao thông tin thông qua việc lắng nghe: từ được nói, của bản thân hoặc người khác, âm thanh và tiếng ồn → Nhóm những bạn có thiên hướng học tốt bằng âm thanh, lắng nghe thông tin qua các bài giảng trên lớp, hướng dẫn bằng lời.
          </li>
          <li>
            <span className="bold-txt">Kinesthetic - xúc giác:</span>{" "}
            Liên quan đến trải nghiệm thể chất bao gồm: chạm, cảm nhận, cầm nắm, thực hành → Nhóm những bạn có thiên hướng học tốt bằng hình thức hoạt động làm dự án, bài tập nhóm, tham gia trực tiếp các hoạt động trải nghiệm thực tế,... chủ yếu ứng dụng kiến thức từ các thí nghiệm, tự tay thực nghiệm để rút ra kiến thức.
          </li>
        </ul>
      </div>

      <Link to="/learningStyle" className="primary-btn font-18 align-center margin-top-2rem">Kiểm tra ngay</Link>
    </body>
  );
};
