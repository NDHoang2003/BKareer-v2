import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "./OAuth";
function RegisterForm() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://103.15.51.131:3000/api/auth/signup", {
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
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="form-block flex-col test">
      <form onSubmit={handleSubmit}>
        <div className="authen-title-txt flex-self-start">Đăng ký</div>

        <div className="answer-form">
          <input
            className="input-field width-100"
            type="text"
            placeholder="Tên người dùng"
            onChange={handleChange}
            id="username"
            required
          />
        </div>
        <div className="answer-form">
          <input
            className="input-field width-100"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            id="email"
            required
          />
        </div>

        <div className="answer-form">
          <input
            className="input-field width-100"
            type="password"
            placeholder="Mật khẩu"
            onChange={handleChange}
            required
            id="password"
          />
        </div>

        {error && <p className="red">{error}</p>}

        <button
          className="primary-btn margin-top-2rem font-18 align-center width-100"
          disabled={loading}
        >
          {loading ? "Loading..." : "Đăng ký"}
        </button>
      </form>


      {/* Sign in with Google */}
      <OAuth />

      {/* Login Now */}
      <div className="margin-top-2rem align-center width-fit-content font-18">
        <p className="text-color-primary">
          Đã có tài khoản?{" "}
          <a className="text-decor-none bold-txt" href="/login">
            Đăng nhập ngay
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
