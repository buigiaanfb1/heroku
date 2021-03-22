import * as actionTypes from "./constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.AUTH_REQUEST:
      state.loading = true;
      return { ...state };

    case actionTypes.AUTH_SUCCESS:
      state.loading = false;
      state.data = payload;
      return { ...state };

    case actionTypes.AUTH_FAILED:
      state.loading = false;
      state.err = payload;
      return { ...state };

    default:
      return { ...state };
  }
};
export default authReducer;
