import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import CourseList from "../../../components/CourseList";
import { Typography, withStyles } from "@material-ui/core";
import style from "./style";
import { fetchCourseList } from "../../../redux/actions/course";

/**
 * 1. Call api fetch all courses
 * 2. Post courses in store
 * 3. Render CourseItem
 * 4. Material ui (replaced bs4) + jss (css in js)
 */

class Home extends Component {
  render() {
    return (
      <div className={this.props.classes.backgroundColor}>
        <Typography
          variant="h2"
          component="h1"
          className={this.props.classes.textChange}
        >
          Danh sach khoa hoc
        </Typography>
        <CourseList />
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCourseList());
  }
}

export default connect()(withStyles(style)(Home));
