import * as types from "./types";

export const setCommonField = (payload) => {
  return {
    type: types.SET_COMMON_FIELD,
    payload,
  };
};

export const addJob = (payload) => {
  return {
    type: types.ADD_JOB,
    payload,
  };
};

export const removeJob = (payload) => {
  return {
    type: types.REMOVE_JOB,
    payload,
  };
};

export const resetForm = (payload) => {
  return {
    type: types.RESET_FORM,
    payload,
  };
};

