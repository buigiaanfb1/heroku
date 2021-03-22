import Home from "./../containers/HomeTemplate/Home";
import SignIn from "./../containers/HomeTemplate/SignIn";
import Detail from "./../containers/HomeTemplate/Detail/index2";
import Dashboard from "./../containers/AdminTemplate/Dashboard";
import AddUser from "./../containers/AdminTemplate/AddUser";
import Auth from "../containers/AdminTemplate/Auth";
import HOC from "./../containers/HomeTemplate/HocPage";
import NhanVien from "../containers/HomeTemplate/HocPage/NhanVien";
import HooksPage from "../containers/HomeTemplate/HooksPage";

export const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/signin",
    component: SignIn,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: Detail,
  },
  {
    exact: false,
    path: "/HOC",
    component: HOC,
  },
  {
    exact: false,
    path: "/nhanvien",
    component: NhanVien,
  },
  {
    exact: false,
    path: "/hooks",
    component: HooksPage,
  },
];

export const routeAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUser,
  },
];
