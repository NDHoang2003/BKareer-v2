import { Link } from "react-router-dom";
import image from "../../assets/images/workstyles.png"; // Replace with the actual path to the image

export default function WorkStylesDetail() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm Phong Cách Làm Việc</div>

      <img src={image} className="img-detail align-center" alt="Work Styles" />

      <div className="detail-txt font-20 margin-top-2rem">
        Bài kiểm tra Phong Cách Làm Việc giúp bạn nhận biết phong cách làm việc chủ đạo của bản thân, cách bạn tiếp cận công việc và tương tác với đồng nghiệp. Qua đó, bạn sẽ hiểu rõ hơn về điểm mạnh và cách tối ưu hóa hiệu quả làm việc của mình.
      </div>

      <div className="detail-txt font-20">
        Bài kiểm tra này phân chia phong cách làm việc thành bốn nhóm chính:
        <ul>
          <li>
            <span className="bold-txt">Người Thúc Đẩy:</span>{" "}
            Sáng tạo, nhiệt tình và thích khám phá những ý tưởng mới. Họ làm việc tốt nhất trong môi trường linh hoạt và chấp nhận rủi ro.
          </li>
          <li>
            <span className="bold-txt">Người Hỗ Trợ:</span>{" "}
            Hợp tác, trung thành và nhạy cảm. Họ coi trọng cảm xúc và tạo sự hòa hợp trong công việc, giúp đỡ đồng nghiệp khi cần thiết.
          </li>
          <li>
            <span className="bold-txt">Người Phân Tích:</span>{" "}
            Logic, tổ chức và kỷ luật. Họ làm việc hiệu quả theo quy trình và thích phân tích sâu để đưa ra quyết định chính xác.
          </li>
          <li>
            <span className="bold-txt">Người Kiểm Soát:</span>{" "}
            Quyết đoán, tự tin và định hướng kết quả. Họ thích đảm nhận trách nhiệm và đạt được mục tiêu cụ thể.
          </li>
        </ul>
      </div>

      <div className="detail-txt font-20">
        Hoàn thành bài kiểm tra này sẽ giúp bạn:
        <ul>
          <li>Nhận diện phong cách làm việc cá nhân của mình.</li>
          <li>Phát huy điểm mạnh và điều chỉnh phương pháp làm việc hiệu quả hơn.</li>
          <li>Tạo sự hòa hợp với các phong cách làm việc khác để tối ưu hóa hiệu quả đội nhóm.</li>
        </ul>
      </div>

      <Link to="/workStyle" className="primary-btn font-18 align-center margin-top-2rem">Bắt đầu kiểm tra</Link>
    </body>
  );
}
