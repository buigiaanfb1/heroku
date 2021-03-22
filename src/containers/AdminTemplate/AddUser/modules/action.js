import axios from "axios";
import * as actionTypes from "./constants";

export const actAddUserApi = (user) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  return (dispatch) => {
    actAddUserRequest();
    axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        dispatch(actAddUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actAddUserFailed(err));
      });
  };
};

const actAddUserRequest = () => {
  return {
    type: actionTypes.ADD_USER_REQUEST,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: actionTypes.ADD_USER_SUCCESS,
    payload: data,
  };
};

const actAddUserFailed = (err) => {
  return {
    type: actionTypes.ADD_USER_FAILED,
    payload: err,
  };
};
