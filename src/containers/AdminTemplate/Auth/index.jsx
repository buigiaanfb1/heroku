import React, { Component } from "react";
import { fetchLogin } from "./../Auth/modules/action";
import { connect } from "react-redux";

class Auth extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.props.history);
    this.props.dispatch(fetchLogin(this.state, this.props.history));
  };

  renderNoti = () => {
    const { err } = this.props;
    if (err) {
      return <div className="alert alert-danger">{err.response.data}</div>;
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) return <p>Loading.......</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3>AuthPage</h3>
            {this.renderNoti()}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="matKhau"
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.handleSubmit}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    err: state.authReducer.err,
  };
};

export default connect(mapStateToProps)(Auth);
