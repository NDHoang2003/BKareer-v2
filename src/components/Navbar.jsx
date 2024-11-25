import ScrollToTop from "../utils/ScrollToTop";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";

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
            <Link to="/ikigai">Ikigai</Link>
          </li>

          <Dropdown />

          <li className="font-18 margin-right-1rem">
            <Link to="/news">Tin tức</Link>
          </li>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="nav-rounded-full-img"
                src={currentUser.avatar}
                alt="profile margin-left-10"
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
