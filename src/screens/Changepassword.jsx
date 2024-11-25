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
          "http://localhost:3000/api/user/changepassword",
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
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-center font-bold text-blue-800">Đổi mật khẩu</h2>
        <span>Mật khẩu:</span>
        <input
          type="password"
          placeholder="Mật khẩu cũ"
          id="oldpassword"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <span>Mật khẩu mới:</span>
        <input
          type="password"
          placeholder="Mật khẩu mới"
          id="newpassword"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-green-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Thay đổi"}
        </button>
      </form>

      <p className="text-red-700 mt-5">{flag ? "" : message}</p>
      <p className="text-green-700 mt-5">
        {updateSuccess ? "Đổi mật khẩu thành công!" : ""}
      </p>
    </div>
  );
}
