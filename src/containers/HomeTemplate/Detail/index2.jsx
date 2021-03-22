import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseDetail } from "../../../redux/actions/course";
import { CardMedia } from "@material-ui/core";

export default function Detail(props) {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const { id } = props.match.params;
    setState({
      ...state,
      loading: true,
    });
    axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc`,
      method: "GET",
      params: {
        maKhoaHoc: `${id}`,
      },
    })
      .then((result) => {
        setState({
          ...state,
          loading: false,
          data: result.data,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loading: false,
          error: err,
        });
      });
  }, []);

  return (
    <div>
      <CardMedia image={state.data?.hinhAnh} component="img" />
    </div>
  );
}
