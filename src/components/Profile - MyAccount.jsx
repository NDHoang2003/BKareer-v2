import React from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function MyAccount() {
  const fileRef = React.useRef(null);
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
      dispatch(updateUserStart());
      const res = await fetch(
        `http://103.15.51.131:3000/api/user/update/${currentUser._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === "false") {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => {
            const file = e.target.files[0];
            const maxSize = 2 * 1024 * 1024; // 2MB

            if (file && file.size > maxSize) {
              alert("Kích thước tệp vượt quá 2MB. Vui lòng chọn tệp khác.");
              e.target.value = ""; // Reset input
              return;
            }

            setFile(file);
          }}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />

        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="profile"
          className="profile-img-rounded object-cover cursor-pointer self-center mt-2"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Lỗi tải ảnh lên: Kích thước hình ảnh không được vượt quá 2MB
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">
              Ảnh đại diện đã cập nhật thành công!
            </span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="Tên người dùng"
          defaultValue={currentUser.username}
          id="username"
          className="border p-3 rounded-lg text-color-444"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          defaultValue={currentUser.email}
          className="border p-3 rounded-lg text-color-444"
          onChange={handleChange}
        />

        <div className="flex-self-end">
          <Link to="/changepassword">
            <span className="text-color-primary cursor-pointer">
              Đổi mật khẩu
            </span>
          </Link>
        </div>

        <button disabled={loading} className="primary-btn font-18">
          {loading ? "Đang tải..." : "Cập nhật"}
        </button>
      </form>

      <p className="text-red-700 mt-5">{error ? error : ""}</p>
      <p className="text-green-700 mt-5">
        {updateSuccess ? "Cập nhật thông tin thành công!" : ""}
      </p>
    </>
  );
}
