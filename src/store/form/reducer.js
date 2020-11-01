import * as types from "./types";
import { initUserInfo } from "../../constants";
import { selectState } from "./utils";

const INITIAL_STATE = {
  formState: initUserInfo,
  marriageFormState: null,
  marriageFormData: null,
  marriageFormLoading: true,
  marriageFormError: null,
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_COMMON_FIELD:
      return {
        ...state,
        [selectState(action.payload.state)]: {
          ...state[selectState(action.payload.state)],
          ...action.payload.data,
        },
      };

    case types.ADD_CHECKBOX_VALUE:
      const addedName = action.payload.data.name;
      const addedValue = action.payload.data.value;
      return {
        ...state,
        [selectState(action.payload.state)]: {
          ...state[selectState(action.payload.state)],
          [addedName]: [
            ...state[selectState(action.payload.state)][addedName],
            addedValue,
          ],
        },
      };

    case types.REMOVE_CHECKBOX_VALUE:
      const removedName = action.payload.data.name;
      const removedValue = action.payload.data.value;
      return {
        ...state,
        [selectState(action.payload.state)]: {
          ...state[selectState(action.payload.state)],
          [removedName]: [
            ...state[selectState(action.payload.state)][removedName].filter(
              (value) => value !== removedValue
            ),
          ],
        },
      };

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

    case types.RESET_FORM:
      return { ...state, [selectState(action.payload.state)]: action.payload };

    default:
      return state;
  }
};

export default formReducer;
