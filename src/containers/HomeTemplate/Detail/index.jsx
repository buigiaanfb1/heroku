import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseDetail } from "../../../redux/actions/course";
import { CardMedia } from "@material-ui/core";
class Detail extends Component {
  render() {
    return (
      <div>
        <CardMedia image={this.props.courseDetail.hinhAnh} component="img" />
      </div>
    );
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchCourseDetail(id));
  }
}
const mapStateToProps = (state) => {
  return {
    courseDetail: state.courses.courseDetail,
  };
};

export default connect(mapStateToProps)(Detail);
