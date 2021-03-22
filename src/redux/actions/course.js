import axios from "axios";
import { FETCH_COURSES, FETCH_COURSES_DETAILS } from "./../constants/course";

export const fetchCourseList = () => {
  return (dispatch) => {
    axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
      method: "GET",
      params: {
        MaNhom: "GP01",
      },
    })
      .then((res) => {
        dispatch({
          type: FETCH_COURSES,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCourseDetail = (id) => {
  return (dispatch) => {
    axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc`,
      method: "GET",
      params: {
        maKhoaHoc: `${id}`,
      },
    })
      .then((res) => {
        dispatch({
          type: FETCH_COURSES_DETAILS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
