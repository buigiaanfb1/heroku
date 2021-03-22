import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavbarHome from "./../../components/NavbarHome";

function LayoutHome(props) {
  return (
    <>
      <NavbarHome />
      {props.children}
    </>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutHome>
          {console.log(propsComponent)}
          <Component {...propsComponent} />
        </LayoutHome>
      )}
    />
  );
}
