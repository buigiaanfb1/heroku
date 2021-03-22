import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAdmin from "./../../components/NavbarAdmin";

function LayoutAdmin(props) {
  return (
    <>
      <NavbarAdmin />
      {props.children}
    </>
  );
}
export default class AdminTemplate extends Component {
  render() {
    if (!localStorage.getItem("UserAdmin")) return <Redirect to="/auth" />;
    const { path, exact, component } = this.props;
    return (
      <LayoutAdmin>
        <Route exact={exact} component={component} path={path} />
      </LayoutAdmin>
    );
  }
}
