import React from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { Checkmark } from "react-checkmark";

export default function Changepassword() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = React.useState(undefined);
  const [filePerc, setFilePerc] = React.useState(0);
  const [fileUploadError, setFileUploadError] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [updateSuccess, setUpdateSuccess] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const [message, setMessage] = React.useState("");
  const [flag, setFlag] = React.useState(true);
  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentUser) {
        const res = await fetch(
          "http://103.15.51.131:3000/api/user/changepassword",
          {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: currentUser._id,
              oldPassword: formData.oldpassword,
              newPassword: formData.newpassword,
            }),
          }
        );
        const data = await res.json();
        if (data.success === "false") {
          setMessage(data.message);
          setFlag(false);
          setUpdateSuccess(false);
          return;
        } else {
          setMessage("Đổi mật khẩu thành công!");
          setUpdateSuccess(true);
          setFlag(true);
        }
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="body p-3 max-w-lg mx-auto align-center width-45">
      <div className="screen-title">Đổi mật khẩu</div>
      <div className="mb-4 text-red-700 ">Chú ý: Không hỗ trợ cho tài khoản Đăng nhập với Google</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-0.5">
        <span className="text-color-444">Mật khẩu cũ:</span>
        <input
          type="password"
          placeholder="Mật khẩu cũ"
          id="oldpassword"
          className="mb-4 border p-3 rounded-lg"
          onChange={handleChange}
        />

        <span className="text-color-444">Mật khẩu mới:</span>
        <input
          type="password"
          placeholder="Mật khẩu mới"
          id="newpassword"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        <p className="text-red-700 mt-5">{flag ? "" : message}</p>

        <button disabled={loading} className="primary-btn font-18 mt-8">
          {loading ? "Loading..." : "Đổi mật khẩu"}
        </button>
      </form>

      <p>
        {updateSuccess ? (
          <div className="success-noti width-100 mt-4">
            <div className="flex-row flex-items-center width-fit-content">
              <Checkmark size="small" color="#007e5e" className="ml-0 mr-0" />
              <span className="ml-1.5">Đổi mật khẩu thành công!</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
