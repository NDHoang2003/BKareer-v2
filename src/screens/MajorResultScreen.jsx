import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';

function MajorResult() {
  const mbtiOptions = [
    "ESTP - Người thực thi", "ESFP - Người nghệ sĩ", "ENFP - Người truyền cảm hứng", "ENTP - Người nhìn xa",
    "ESTJ - Người giám hộ", "ESFJ - Người quan tâm", "ENFJ - Người cho đi", "ENTJ - Người lãnh đạo",
    "ISTJ - Người trách nhiệm", "ISFJ - Người nuôi dưỡng", "INFJ - Nhà tư vấn", "INTJ - Nhà khoa học",
    "ISTP - Nhà kỹ thuật", "ISFP - Người nghệ sĩ", "INFP - Người lý tưởng hóa", "INTP - Nhà triết học",
  ];

  const mbtiDefault = "Chọn nhóm tính cách MBTI của bạn";

  const careerOptions = [
    "Nông nghiệp, Thực phẩm và Tài nguyên thiên nhiên",
    "Kiến trúc và xây dựng",
    "Nghệ thuật, Công nghệ A/V và Truyền thông",
    "Kinh doanh, quản lí và quản trị",
    "Giáo dục và đào tạo",
    "Tài chính",
    "Chính phủ và hành chính công",
    "Y tế",
    "Du lịch",
    "Dịch vụ con người",
    "Công nghệ",
    "Luật, An toàn công cộng, Sửa chữa và bảo mật",
    "Kỹ thuật",
    "Thương mại",
    "Khoa học",
    "Phân phối và hậu cần",
  ];

  const careerDefault = "Chọn nhóm ngành yêu thích của bạn";

  const calcOptions = [
    {
      id: "1",
      title: "Weighted Sum"
    },
    {
      id: "2",
      title: "VIKOR"
    }
  ];

  const onSelected = (answerId) => {
    var radioInput = document.getElementById(answerId);
    radioInput.checked = true;

    
  };

  return (
    <body className="body screen-block">
      <div className="screen-title">Kết quả MBTI và Nhóm ngành yêu thích</div>
      <div className="flex-row flex-items-start">
        <div className="font-18 semi-bold-txt left-res-block">Nhóm tính cách MBTI:</div>
        <div className="flex-row flex-space-between right-res-block">
          <Dropdown className="dropdown dropdown-block" options={mbtiOptions} value={mbtiDefault} placeholder="Select an option" />
          <Link className="primary-outline-btn font-18 margin-left-20 flex-self-start" to="/mbti">Kiểm tra ngay</Link>
        </div>
        
      </div>

      <div className="margin-top-1rem flex-row flex-items-start">
        <div className="font-18 semi-bold-txt left-res-block">Nhóm ngành yêu thích:</div>
        <div className="flex-row flex-space-between right-res-block">
          <Dropdown className="dropdown dropdown-block" options={careerOptions} value={careerDefault} placeholder="Select an option" />
          <Link className="primary-outline-btn font-18 margin-left-20 flex-self-start" to="/career">Kiểm tra ngay</Link>
        </div>
        
      </div>

      <div className="margin-top-1rem flex-row flex-items-center">
        <div className="font-18 semi-bold-txt left-res-block">Chọn cách tính:</div>
        <div className="right-res-block">
          <input
            type="radio"
            name="Weighted Sum"
            id={calcOptions[0].id}
            className="input"
            onClick={() => onSelected(calcOptions[0].id)}
          />
          <label htmlFor="Weighted Sum" className="font-18">{calcOptions[0].title}</label>

          <input
            type="radio"
            name="VIKOR"
            id={calcOptions[1].id}
            className="input margin-left-20"
            onClick={() => onSelected(calcOptions[1].id)}
          />
          <label htmlFor="VIKOR" className="font-18">{calcOptions[1].title}</label>
        </div>
      </div>

      <div className="margin-top-2rem">
        <button className="primary-btn font-18 align-center">Gửi kết quả</button>
      </div>

      <div className="res-block"></div>
    </body>
  );
}

export default MajorResult;
