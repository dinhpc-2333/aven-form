import { initUserInfo } from "../../constants";
import * as types from "./types";

const INITIAL_STATE = {
  marriageFormState: {},
  marriageFormData: null,
  marriageFormLoading: true,
  marriageFormError: null,
};

const marriageFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_COMMON_FIELD:
      return {
        ...state,
        marriageFormState: { ...state.marriageFormState, ...action.payload },
      };

    case types.ADD_CHECKBOX_VALUE:
      return {
        ...state,
        marriageFormState: {
          ...state.marriageFormState,
          jobs: [...state.marriageFormState.jobs, action.payload],
        },
      };

    case types.REMOVE_CHECKBOX_VALUE:
      const newJobs = [...state.marriageFormState.jobs].filter(
        (job) => job !== action.payload
      );
      return {
        ...state,
        marriageFormState: { ...state.marriageFormState, jobs: newJobs },
      };

    case types.RESET_FORM:
      return { ...state, marriageFormState: { ...initUserInfo } };

    case types.FETCH_MARRIAGE_FORM.START:
      return {
        ...state,
        marriageFormData: null,
        marriageFormLoading: true,
        marriageFormError: null,
      };

    case types.FETCH_MARRIAGE_FORM.SUCCESS:
      const marriageFormState = action.payload
        .map((field) => {
          return { name: field.name, type: field.type };
        })
        .reduce(
          (obj, item) =>
            Object.assign(obj, {
              [item.name]: item.type === "checkbox" ? [] : "",
            }),
          {}
        );

      return {
        ...state,
        marriageFormState,
        marriageFormData: action.payload,
        marriageFormLoading: false,
        marriageFormError: null,
      };

    case types.FETCH_MARRIAGE_FORM.FAILURE:
      return {
        ...state,
        marriageFormData: null,
        marriageFormLoading: false,
        marriageFormError: action.payload,
      };
    default:
      return state;
  }
};

export default marriageFormReducer;
