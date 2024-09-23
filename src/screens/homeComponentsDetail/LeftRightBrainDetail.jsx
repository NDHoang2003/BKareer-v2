import { Link } from "react-router-dom";

export default function LeftRightBrain() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm não trái - não phải</div>

      <Link to="/lrBrain" className="primary-btn font-18 align-center margin-top-2rem">Kiểm tra ngay</Link>
    </body>
  );
};
