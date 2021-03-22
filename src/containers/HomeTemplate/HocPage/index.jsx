import React, { Component } from "react";
import NhanVien from "./NhanVien";
import SanPham from "./SanPham";
import WithModal from "./WithModal";

let ModalComponent = WithModal(NhanVien);

export default class HOC extends Component {
  render() {
    return (
      <div>
        <h3>HOC</h3>
        <ModalComponent />
      </div>
    );
  }
}
