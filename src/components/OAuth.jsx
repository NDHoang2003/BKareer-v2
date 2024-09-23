import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

// import image from "../assets/images/google.png"

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("http://localhost:3000/api/auth/google", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      alert("Không thể đăng nhập với Google", error);
    }
  };

  return (
    <div className="margin-top-2">
      <button
        onClick={handleGoogleClick}
        type="button"
        className="oauth-btn font-18 align-center width-100"
      >
        <div className="">
          {/* <img src={image} className="img-loginWithGoogle"/> */}
          Đăng nhập với Google
        </div>
        
      </button>
    </div>
    
  );
}
