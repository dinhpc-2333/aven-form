import * as types from "./types";

const initReducer = (initState) => {
  return initState;
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_COMMON_FIELD:
      return { ...state, ...action.payload };

    case types.ADD_JOB:
      return { ...state, jobs: [...state.jobs, action.payload] };

    case types.REMOVE_JOB:
      const newJobs = [...state.jobs].filter((job) => job !== action.payload);
      return { ...state, jobs: newJobs };

    case types.RESET_FORM:
      return initReducer(action.payload);
    default:
      throw new Error();
  }
};

export { reducer, initReducer };
