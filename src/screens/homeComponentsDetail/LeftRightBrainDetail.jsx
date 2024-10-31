import { Link } from "react-router-dom";

import image from "../../assets/images/left-right-brain.png"

export default function LeftRightBrain() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm não trái - não phải</div>
      
      <img src={image} className="img-detail align-center" />

      <div className="detail-txt font-20 margin-top-2rem">
      <span className="bold-txt">Trắc nghiệm Não Trái - Não Phải</span> là một phương pháp giúp khám phá xu hướng sử dụng não bộ của mỗi người, từ đó hiểu rõ hơn về đặc điểm tư duy và cách xử lý thông tin của họ. Bài trắc nghiệm này dựa trên lý thuyết về sự khác biệt giữa hai bán cầu não trái và phải, mỗi bên chịu trách nhiệm cho những chức năng và kỹ năng khác nhau.
      </div>

      <div className="detail-txt font-20">
        Hai bán cầu não đảm nhận những chức năng khác nhau và có ảnh hưởng đến cách bạn xử lý thông tin, sáng tạo, và giao tiếp. Cụ thể:
        <ul>
          <li>
            <span className="bold-txt">Não Trái:</span> Phụ trách logic, phân tích, và chi tiết. Người thiên về não trái thường giỏi xử lý thông tin một cách tuần tự và khoa học.
          </li>
          <li>
            <span className="bold-txt">Não Phải:</span> Kết nối với khả năng sáng tạo, trực giác, và cảm xúc. Những người thiên về não phải thường có tư duy hình ảnh tốt, dễ đồng cảm và thích ứng với nghệ thuật.
          </li>
        </ul>
      </div>

      <div className="detail-txt font-20">
        Dựa vào kết quả của bài trắc nghiệm, bạn có thể khám phá được xu hướng tư duy của mình và ứng dụng điều đó trong học tập, làm việc, cũng như các mối quan hệ hàng ngày. Hãy kiểm tra ngay để tìm hiểu về não bộ của mình!
      </div>


      <Link to="/lrBrain" className="primary-btn font-18 align-center margin-top-2rem">Kiểm tra ngay</Link>
    </body>
  );
};
