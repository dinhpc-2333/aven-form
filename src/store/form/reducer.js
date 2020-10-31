import { initUserInfo } from "../../constants";
import * as types from "./types";

const INITIAL_STATE = initUserInfo;

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_COMMON_FIELD:
      return { ...state, ...action.payload };

    case types.ADD_JOB:
      return { ...state, jobs: [...state.jobs, action.payload] };

    case types.REMOVE_JOB:
      const newJobs = [...state.jobs].filter((job) => job !== action.payload);
      return { ...state, jobs: newJobs };

    case types.RESET_FORM:
      return { ...state, ...initUserInfo };

    default:
      return state;
  }
};

export default formReducer;
