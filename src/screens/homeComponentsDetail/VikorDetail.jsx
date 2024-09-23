function Vikor() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Phương pháp VIKOR</div>

      <div className="detail-txt font-20 margin-top-2rem">
        Phương pháp VIKOR là một phương pháp tối ưu đa tiêu chí (MCDM) tập trung vào việc xếp hạng và lựa chọn từ một tập các phương án thay thế dựa trên các tiêu chí xung đột. Phương pháp này giúp xác định giải pháp tối ưu gần với giá trị lý tưởng nhất.
      </div>

      <div className="detail-txt font-20">
        Quy trình VIKOR bao gồm 4 bước:
        <ul>
          <li><span className="semi-bold-txt">Bước 1 và 2:</span> Tìm ra đo lường tiêu chí và đo lường “hối tiếc” cho các phương án đối với từng tiêu chí.</li>
          <li><span className="semi-bold-txt">Bước 3:</span> Tính toán số lượng tối thiểu và tối đa của các kết quả bước 2.</li>
          <li><span className="semi-bold-txt">Bước 4:</span> Tính toán Qj như sự đồng thuận của đa số trong ưu tiên các phương án.</li>
        </ul>
      </div>

      <div className="detail-txt font-20">
        <span className="semi-bold-txt">Ưu điểm:</span> Phương pháp VIKOR có nhiều ưu điểm đáng kể so với các phương pháp MCDM khác:
        <ul>
          <li>Dễ hiểu và sử dụng cho người dùng không có chuyên môn sâu về MCDM.</li>
          <li>Cân nhắc đồng thời độ chênh lệch so với giá trị lý tưởng và độ hối tiếc, đảm bảo giải pháp không chỉ lý thuyết tốt mà còn ít gây hối tiếc nhất.</li>
          <li>Khả năng xử lý cả tiêu chí định lượng và định tính, làm cho phương pháp linh hoạt hơn.</li>
          <li>Người dùng có thể điều chỉnh trọng số của các chỉ số để ưu tiên phù hợp với nhu cầu.</li>
        </ul>
      </div>

      <div className="detail-txt font-20">
        <span className="semi-bold-txt">Nhược điểm:</span> Tuy nhiên, phương pháp VIKOR cũng có một số nhược điểm:
        <ul>
          <li>Nhạy cảm với sự thay đổi của trọng số tiêu chí, đòi hỏi phải lựa chọn trọng số cẩn thận.</li>
          <li>Không cung cấp quy trình rõ ràng để xác định trọng số, điều này có thể dẫn đến kết quả khác nhau tùy theo người sử dụng.</li>
        </ul>
      </div>

      <div className="detail-txt font-20">
        VIKOR là một phương pháp hiệu quả trong việc ra quyết định đa tiêu chí, đặc biệt là trong các hệ thống phức tạp, giúp giảm thiểu tối đa sự hối tiếc khi lựa chọn phương án.
      </div>
    </body>
  );
}

export default Vikor;
