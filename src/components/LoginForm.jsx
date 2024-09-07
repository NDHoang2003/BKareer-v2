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
      const res = await fetch(
        "https://backend-datn-v2.vercel.app/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
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
  return (
    <div className="form-block">
      <form onSubmit={handleSubmit}>
        <div className="login-title-txt flex-self-start">Đăng nhập</div>

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

        {/* Login Button */}
        <button
          className="primary-btn margin-top-10 font-18 align-center width-100"
          disabled={loading}
        >
          {loading ? "Loading..." : "Đăng nhập"}
        </button>
      </form>
      {error && <p className="red">{error}</p>}

      {/* Register Now */}
      <OAuth />
      <div className="align-center width-fit-content font-18">
        <p>
          Chưa có tài khoản?{" "}
          <a className="text-decor-none" href="/register">
            Đăng ký ngay
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
