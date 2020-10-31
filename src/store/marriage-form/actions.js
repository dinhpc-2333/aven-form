import * as types from "./types";

export const setCommonField = (payload) => {
  return {
    type: types.SET_COMMON_FIELD,
    payload,
  };
};

export const addCheckboxValue = (payload) => {
  return {
    type: types.ADD_CHECKBOX_VALUE,
    payload,
  };
};

export const removeCheckboxValue = (payload) => {
  return {
    type: types.REMOVE_CHECKBOX_VALUE,
    payload,
  };
};

export const resetForm = (payload) => {
  return {
    type: types.RESET_FORM,
    payload,
  };
};

export const fetchMarriageFormStart = () => {
  return {
    type: types.FETCH_MARRIAGE_FORM.START,
  };
};

export const fetchMarriageFormSuccess = (payload) => {
  return {
    type: types.FETCH_MARRIAGE_FORM.SUCCESS,
    payload,
  };
};

export const fetchMarriageFormFailure = (error) => {
  return {
    type: types.FETCH_MARRIAGE_FORM.START,
    payload: error,
  };
};
