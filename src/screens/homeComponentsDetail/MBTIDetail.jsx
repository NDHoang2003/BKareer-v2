function MBTIDetail() {
  const mbtiTypes = [
    { type: "ISTJ", name: "Người Kiểm Soát", description: "Thực tế, tổ chức và đáng tin cậy." },
    { type: "ISFJ", name: "Người Bảo Vệ", description: "Ân cần, chu đáo và trách nhiệm." },
    { type: "INFJ", name: "Người Cố Vấn", description: "Trực giác, sáng tạo và có tầm nhìn xa." },
    { type: "INTJ", name: "Người Chiến Lược", description: "Độc lập, sáng tạo và chiến lược." },
    { type: "ISTP", name: "Người Thợ", description: "Thực tế, linh hoạt và giỏi giải quyết vấn đề." },
    { type: "ISFP", name: "Người Nghệ Sĩ", description: "Nhẹ nhàng, thân thiện và thích tự do." },
    { type: "INFP", name: "Người Trung Gian", description: "Lý tưởng, trung thành và tôn trọng giá trị." },
    { type: "INTP", name: "Người Suy Tư", description: "Trí tuệ, sáng tạo và lý trí." },
    { type: "ESTP", name: "Người Hoạt Náo", description: "Năng động, thực tế và quan sát." },
    { type: "ESFP", name: "Người Biểu Diễn", description: "Xã hội, sống động và thích vui vẻ." },
    { type: "ENFP", name: "Người Động Viên", description: "Nhiệt huyết, sáng tạo và trực giác." },
    { type: "ENTP", name: "Người Sáng Tạo", description: "Thông minh, sáng tạo và linh hoạt." },
    { type: "ESTJ", name: "Người Quản Lý", description: "Thực tế, quyết đoán và có tổ chức." },
    { type: "ESFJ", name: "Người Cung Cấp", description: "Ân cần, xã hội và chu đáo." },
    { type: "ENFJ", name: "Người Giáo Viên", description: "Nhiệt tình, lý tưởng và thấu hiểu." },
    { type: "ENTJ", name: "Người Lãnh Đạo", description: "Quyết đoán, có tầm nhìn và lãnh đạo." }
  ];

  return (
    <div className="mbti-page body screen-block">
      <div className="screen-title">MBTI - Myers-Briggs Type Indicator</div>

      {/* Phần mô tả về MBTI */}
      <div className="detail-txt font-20 margin-top-2rem">
        MBTI (Myers-Briggs Type Indicator) là một công cụ phân loại tính cách giúp con người hiểu rõ hơn về bản thân và cách họ tương tác với thế giới. Dựa trên lý thuyết của Carl Jung, MBTI phân loại tính cách thành bốn trục chính:
      </div>

      {/* Mô tả về các trục MBTI */}
      <div className="detail-txt font-20 margin-top-2rem">
        <ul className="mbti-list">
          <li><span className="semi-bold-txt">Hướng ngoại (E) và Hướng nội (I):</span> Hướng ngoại tập trung vào thế giới bên ngoài, còn hướng nội tập trung vào thế giới nội tâm.</li>
          <li><span className="semi-bold-txt">Cảm nhận (S) và Trực giác (N):</span> Người cảm nhận chú trọng vào chi tiết và thực tế, còn người trực giác nhìn vào bức tranh tổng thể.</li>
          <li><span className="semi-bold-txt">Tư duy (T) và Cảm xúc (F):</span> Người tư duy đưa ra quyết định dựa trên logic, trong khi người cảm xúc dựa vào giá trị cá nhân.</li>
          <li><span className="semi-bold-txt">Phán đoán (J) và Nhận thức (P):</span> Người phán đoán thích lập kế hoạch, còn người nhận thức thích sự linh hoạt và ứng biến.</li>
        </ul>
      </div>

      {/* Bảng 4x4 về các loại tính cách MBTI */}
      <div className="mbti-table margin-top-2rem">
        <table>
          <tbody>
            {Array.from({ length: 4 }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {mbtiTypes.slice(rowIndex * 4, (rowIndex + 1) * 4).map((type, colIndex) => (
                  <td key={colIndex}>
                    <div className="card">
                      <div className="card-title">{type.type}</div>
                      <div className="card-subtitle">{type.name}</div>
                      <div className="card-description">{type.description}</div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Các bước đánh giá MBTI */}
      <div className="detail-txt font-20 margin-top-2rem">
        <span className="semi-bold-txt">Các bước đánh giá MBTI:</span>
        <ul className="mbti-step-list">
          <li><span className="semi-bold-txt">Bước 1:</span> Trả lời bộ câu hỏi MBTI.</li>
          <li><span className="semi-bold-txt">Bước 2:</span> Xác định loại tính cách từ câu trả lời.</li>
          <li><span className="semi-bold-txt">Bước 3:</span> Phân tích kết quả và nhận báo cáo chi tiết.</li>
          <li><span className="semi-bold-txt">Bước 4:</span> Sử dụng thông tin để phát triển cá nhân và quản lý sự nghiệp.</li>
        </ul>
      </div>

      {/* Kết luận về việc sử dụng MBTI */}
      <div className="detail-txt font-20 margin-top-2rem">
        MBTI là công cụ hữu ích trong phát triển cá nhân và quản lý nhân sự. Hiểu rõ tính cách giúp cải thiện mối quan hệ và lựa chọn nghề nghiệp phù hợp.
      </div>
    </div>
  );
}

export default MBTIDetail;
