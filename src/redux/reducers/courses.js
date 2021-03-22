import { FETCH_COURSES, FETCH_COURSES_DETAILS } from "./../constants/course";

const initialState = {
  courseList: [],
  courseDetail: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COURSES: {
      state.courseList = payload;
      return { ...state };
    }

    case FETCH_COURSES_DETAILS: {
      return { ...state, courseDetail: payload };
    }
    default:
      return state;
  }
};
