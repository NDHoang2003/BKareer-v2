import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";
import OAuth from "./OAuth.jsx";

function LoginForm() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("http://103.15.51.131:3000/api/auth/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === "false") {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  const [val, setVal] = useState(false); //initializes checkbox to false
  const Checkbox = (props) => {
    return (
      <input
        type="checkbox"
        checked={props.val}
        onClick={() => {
          props.setValue(!props.val);
        }}
      />
    );
  };

  return (
    <div className="form-block">
      <form onSubmit={handleSubmit}>
        <div className="authen-title-txt flex-self-start">Đăng nhập</div>

        <div className="answer-form">
          <input
            className="input-field width-100"
            type="email"
            placeholder="Email"
            required
            id="email"
            onChange={handleChange}
          />
        </div>

        <div className="answer-form">
          <input
            className="input-field width-100"
            type="password"
            placeholder="Mật khẩu"
            required
            id="password"
            onChange={handleChange}
          />
        </div>

        {error && <p className="red">{error}</p>}

        <div className="flex-space-between ">
          <div></div>
          <Link to="/forgotpassword">
            <div className="text-color-primary cursor-pointer">
              Quên mật khẩu?
            </div>
          </Link>
        </div>

        {/* Login Button */}
        <button
          className="primary-btn margin-top-2rem font-18 align-center width-100"
          disabled={loading}
        >
          {loading ? "Đang tải..." : "Đăng nhập"}
        </button>
      </form>

      {/* Sign in with Google */}
      <OAuth />

      {/* Register Now */}
      <div className="margin-top-2rem align-center width-fit-content font-18">
        <p className="text-color-primary">
          Chưa có tài khoản?{" "}
          <a className="text-decor-none bold-txt" href="/register">
            Đăng ký ngay
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
