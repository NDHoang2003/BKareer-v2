import { Link } from "react-router-dom";

import image from "../../assets/images/grit.jpg";

export default function GritScale() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Bài kiểm tra Grit Scale</div>

      <img src={image} className="img-detail align-center" />

      <div className="detail-txt font-20 margin-top-2rem">
        Trắc nghiệm Grit Scale (hay còn gọi là trắc nghiệm về độ bền bỉ) là một công cụ được sử dụng để đo lường sự kiên trì và đam mê của bạn đối với các mục tiêu dài hạn. Trắc nghiệm này giúp bạn nhận ra mức độ quyết tâm của mình khi đối mặt với những thử thách khó khăn và khả năng duy trì sự tập trung vào mục tiêu lâu dài.
      </div>

      <div className="detail-txt font-20">
        Bài kiểm tra bao gồm các câu hỏi đánh giá cách bạn phản ứng với những thất bại, khả năng giữ vững mục tiêu qua thời gian và mức độ bạn tránh bị phân tâm bởi những mối quan tâm mới.
      </div>

      <div className="detail-txt font-20">
        Dựa trên điểm số bạn đạt được, bạn sẽ biết mình có độ kiên trì ở mức độ nào và có thể so sánh với những người khác. Kết quả của bài kiểm tra có thể giúp bạn hiểu rõ hơn về sức bền của mình trong công việc và học tập.
      </div>

      <div className="detail-txt font-20">
        Căn cứ vào điểm số của bạn trong từng yếu tố, bạn có thể tham khảo các mức độ sau:
        <ul>
          <li>
            <span className="bold-txt">Điểm cao trong Grit Scale:</span> Bạn là người kiên trì và có khả năng vượt qua các thử thách khó khăn, không dễ dàng bỏ cuộc khi gặp trở ngại.
          </li>
          <li>
            <span className="bold-txt">Điểm trung bình trong Grit Scale:</span> Bạn có khả năng kiên trì ở mức vừa phải, nhưng đôi khi có thể bị phân tâm bởi những sở thích hoặc mục tiêu mới.
          </li>
          <li>
            <span className="bold-txt">Điểm thấp trong Grit Scale:</span> Bạn có thể dễ bị mất hứng thú và khó giữ vững mục tiêu lâu dài khi gặp phải khó khăn.
          </li>
        </ul>
      </div>

      <Link to="/gritTest" className="primary-btn font-18 align-center margin-top-2rem">
        Kiểm tra ngay
      </Link>
    </body>
  );
}
