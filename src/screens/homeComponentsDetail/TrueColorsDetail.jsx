import { Link } from "react-router-dom";

import image from "../../assets/images/trueColors.jpeg";

export default function TrueColors() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Bài kiểm tra tính cách True Colors</div>
      
      <img src={image} className="img-detail align-center" />

      <div className="detail-txt font-20 margin-top-2rem">
        <span className="bold-txt">Bài kiểm tra tính cách True Colors</span> đặt ra một loạt câu hỏi để đánh giá sở thích và không thích của bạn. Bài kiểm tra sau đó sẽ đánh giá tính cách của bạn là một trong bốn kiểu màu xanh lam, xanh lá, cam hoặc vàng. Bạn có thể là sự kết hợp của hai màu, nhưng thường thì một học sinh sẽ thể hiện một màu chính. Theo quy tắc chung, bạn nên nhận ra những thuộc tính mạnh mẽ của mình và ghi nhớ những thuộc tính khiến người khác khó chịu.
      </div>

      <Link to="/trueColors" className="primary-btn font-18 align-center margin-top-2rem">Kiểm tra ngay</Link>
    </body>
  );
};
