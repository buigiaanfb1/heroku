import { Button, Container, Grid, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import CourseItem from "../CourseItem";
import { connect } from "react-redux";

class CourseList extends Component {
  render() {
    {
      console.log(this.props);
    }
    return (
      <div>
        <Container maxWidth="lg">
          <Grid container>
            {this.props.courseList.map((item) => {
              return (
                <Grid key={item.maKhoaHoc} item xs={12} sm={6} lg={4} xl={3}>
                  <CourseItem data={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.courses.courseList,
  };
};
export default connect(mapStateToProps)(CourseList);
