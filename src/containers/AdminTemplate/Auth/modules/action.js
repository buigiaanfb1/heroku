import * as actionTypes from "./constants";
import axios from "axios";

export const fetchLogin = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: user,
    })
      .then((result) => {
        if (result.data.maLoaiNguoiDung === "HV") {
          return Promise.reject({
            response: { data: "K co quyen" },
          });
        }
        dispatch(actAuthSuccess(result.data));
        localStorage.setItem("UserAdmin", JSON.stringify(result.data));
        history.replace("/dashboard");
      })
      .catch((err) => {
        dispatch(actAuthFailed(err));
      });
  };
};

const actAuthRequest = () => {
  return {
    type: actionTypes.AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (err) => {
  return {
    type: actionTypes.AUTH_FAILED,
    payload: err,
  };
};
