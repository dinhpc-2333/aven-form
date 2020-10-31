import { initUserInfo } from "../../constants";
import * as types from "./types";

const INITIAL_STATE = {
  formState: initUserInfo,
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_COMMON_FIELD:
      return { ...state, formState: { ...state.formState, ...action.payload } };

    case types.ADD_JOB:
      return {
        ...state,
        formState: {
          ...state.formState,
          jobs: [...state.formState.jobs, action.payload],
        },
      };

    case types.REMOVE_JOB:
      const newJobs = [...state.formState.jobs].filter(
        (job) => job !== action.payload
      );
      return { ...state, formState: { ...state.formState, jobs: newJobs } };

    case types.RESET_FORM:
      return { ...state, formState: { ...initUserInfo } };

    default:
      return state;
  }
};

export default formReducer;
