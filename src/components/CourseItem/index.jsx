import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  //function de dua style vao trong component
  //voi props ten la classes
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import style from "./style";

class CourseItem extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = this.props.data;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            image={hinhAnh}
            className={this.props.classes.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {tenKhoaHoc}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {moTa.length > 45 ? moTa.substr(0, 45) + "..." : moTa}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={this.props.classes.btnAction}>
          <Link
            to={`/detail/${maKhoaHoc}`}
            className={this.props.classes.btn}
            size="small"
            color="primary"
            variant="contained"
            color="primary"
          >
            View
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(style)(CourseItem);
