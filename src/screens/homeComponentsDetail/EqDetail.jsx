import { Link } from "react-router-dom";

export default function EQ() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm EQ</div>

      <Link to="/eq" className="primary-btn font-18 align-center margin-top-2rem">Kiểm tra ngay</Link>
    </body>
  );
};
