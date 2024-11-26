import { Link } from "react-router-dom";

function WeightedSum() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Phương pháp Tổng Trọng Số (Weighted Sum)</div>

      <div className="detail-txt font-20 margin-top-2rem">
        Phương pháp Tổng Trọng Số (Weighted Sum) là một trong những phương pháp MCDM (Quyết định đa tiêu chí) phổ biến và đơn giản nhất. Phương pháp này sử dụng trọng số để phản ánh tầm quan trọng của từng tiêu chí, sau đó tổng hợp giá trị của các tiêu chí để xác định giải pháp tốt nhất.
      </div>

      <div className="detail-txt font-20">
        Các bước thực hiện phương pháp Tổng Trọng Số bao gồm:
        <ul>
          <li><span className="bold-txt">Bước 1 - Xác định tiêu chí:</span> Đầu tiên, xác định các tiêu chí quan trọng cần đánh giá, ví dụ như hiệu suất, chi phí, rủi ro.</li>
          <li><span className="bold-txt">Bước 2 - Gán trọng số cho tiêu chí:</span> Mỗi tiêu chí được gán một trọng số tương ứng, thể hiện mức độ quan trọng của nó.</li>
          <li><span className="bold-txt">Bước 3 - Đánh giá phương án:</span> Đánh giá từng phương án theo các tiêu chí đã đề ra dựa trên dữ liệu thực tế hoặc đánh giá chủ quan.</li>
          <li><span className="bold-txt">Bước 4 - Tính toán tổng trọng số:</span> Nhân hiệu suất của từng phương án với trọng số tương ứng và tổng hợp lại để có điểm cuối cùng cho mỗi phương án.</li>
        </ul>
      </div>

      <div className="detail-txt font-20">
        Kết quả cuối cùng là một điểm tổng hợp giúp người ra quyết định lựa chọn giải pháp tốt nhất. Tuy nhiên, phương pháp này có nhược điểm là kết quả có thể nhạy cảm với thay đổi trong trọng số và không xử lý tốt các tiêu chí mâu thuẫn.
      </div>

      <div className="detail-txt font-20">
        Ví dụ, khi đánh giá ứng viên cho một công việc, có thể sử dụng các tiêu chí như kinh nghiệm, kỹ năng và học vấn, sau đó áp dụng trọng số để tìm ra ứng viên phù hợp nhất.
      </div>

      <Link
        to="/"
        className="primary-btn font-18 align-center margin-top-2rem"
      >
        Trở về trang chủ
      </Link>
    </body>
  );
}

export default WeightedSum;
