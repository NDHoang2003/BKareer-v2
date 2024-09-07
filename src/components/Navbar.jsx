import ScrollToTop from "../utils/ScrollToTop";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <nav id="nav">
        <Link className="appName" to="/">
          BKareer
        </Link>
        <ul>
          <li className="font-18">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="font-18">
            <Link to="/mbti">Trắc nghiệm MBTI</Link>
          </li>
          <li className="font-18">
            <Link to="/career">Khám phá năng lực nghề nghiệp</Link>
          </li>
          <li className="font-18">
            <Link to="/news">Tin tức</Link>
          </li>
          <li className="font-18">
            <Link to="/iq">IQ TEST</Link>
          </li>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <Link to="/login">
                <span className="white-outline-btn">Đăng nhập</span>
              </Link>
            )}
          </Link>
        </ul>
      </nav>
      <ScrollToTop />
    </>
  );
}

export default Navbar;
