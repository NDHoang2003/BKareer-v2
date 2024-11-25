import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from "../redux/user/userSlice";

export default function Setting() {
  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(
        `http://103.15.51.131:3000/api/user/delete/${currentUser._id}`,
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

  return (
    <>
      <div className="flex flex-row justify-between">
        <span
          onClick={handleDeleteUser}
          className="text-red-700 cursor-pointer"
        >
          Xóa tài khoản
        </span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
          Đăng xuất
        </span>
      </div>
    </>
  );
};
