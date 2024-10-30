import { Link } from "react-router-dom";

export default function LearningStyle() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm 3 thiên hướng học tập</div>

      <Link to="/learningStyle" className="primary-btn font-18 align-center margin-top-2rem">Kiểm tra ngay</Link>
    </body>
  );
};
