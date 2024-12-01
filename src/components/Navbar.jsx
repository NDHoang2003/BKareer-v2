import ScrollToTop from "../utils/ScrollToTop";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import { IoExitOutline } from "react-icons/io5";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("http://103.15.51.131:3000/api/auth/signout");
      const data = await res.json();
      if (data.success === "false") {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
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
          {currentUser ? (
            <div className="nav_custom">
              <Link to="/profile">
                <img
                  className="nav-rounded-full-img"
                  src={currentUser.avatar}
                  alt="profile margin-left-10"
                />
              </Link>
              <IoExitOutline
                className="font-18 ml-5 text-white hover:cursor-pointer"
                onClick={handleSignOut}
              />
            </div>
          ) : (
            <Link to="/login">
              <span className="white-outline-btn">Đăng nhập</span>
            </Link>
          )}
        </ul>
      </nav>
      <ScrollToTop />
    </>
  );
}

export default Navbar;
