import React from "react";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Switch from "react-switch";

export default function Setting() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(
        `http://localhost:3000/api/user/delete/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

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

  const [notiChecked, setNotiChecked] = React.useState(false);
  const handleNotiChange = (checked) => {
    setNotiChecked(checked);
  };

  const [dataChecked, setDataChecked] = React.useState(false);
  const handleDataChange = (checked) => {
    setDataChecked(checked);
  };

  return (
    <>
      <div>
        <div className="bold-txt font-20 text-color-444 mb-1">Thông báo</div>

        <div className="flex-row">
          <div className="flex-col flex-1">
            <div className="rcm-card-content font-18 bold-txt">
              Nhận thông báo qua email
            </div>
            <div className="rcm-card-content font-16">
              Cho phép hệ thống gửi thông báo đến email đã đăng ký
            </div>
          </div>
          <div className="flex-3">
            <Switch
              onChange={handleNotiChange}
              checked={notiChecked}
              offColor="#888"
              onColor="#358bca"
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={20}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="bold-txt font-20 text-color-444 mb-1">
          Cài đặt chung
        </div>

        <div className="flex-row">
          <div className="flex-col flex-1">
            <div className="rcm-card-content font-18 bold-txt">
              Sử dụng dữ liệu kết quả các bài kiểm tra
            </div>
            <div className="rcm-card-content font-16">
              Cho phép hệ thống sử dụng kết quả các bài kiểm tra đã thực hiện
            </div>
          </div>

          <div className="flex-3">
            <Switch
              onChange={handleDataChange}
              checked={dataChecked}
              offColor="#888"
              onColor="#358bca"
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={20}
            />
          </div>
        </div>

        <div className="flex-row">
          <div className="flex-col flex-1">
            <div className="text-color-666 font-18 bold-txt">Xóa tài khoản</div>
            <div className="text-color-666 font-16">
              Loại bỏ hoàn toàn thông tin cá nhân và dữ liệu liên quan của tài
              khoản khỏi hệ thống
            </div>
          </div>

          <span
            onClick={handleDeleteUser}
            className="text-red-700 cursor-pointer font-18"
          >
            Xóa tài khoản
          </span>
        </div>
      </div>

      <div className="mt-10 align-center">
        <span onClick={handleSignOut} className="red-btn cursor-pointer">
          Đăng xuất
        </span>
      </div>
    </>
  );
}
