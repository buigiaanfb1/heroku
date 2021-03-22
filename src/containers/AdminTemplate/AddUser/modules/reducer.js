import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_USER_REQUEST: {
      state.loading = true;
      return { ...state };
    }

    case ActionType.ADD_USER_SUCCESS: {
      state.loading = false;
      state.data = payload;
      return { ...state };
    }

    case ActionType.ADD_USER_FAILED: {
      state.loading = false;
      state.err = payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
