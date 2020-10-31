import * as types from "./types";

export const fetchUsersStart = () => {
  return {
    type: types.FETCH_USERS.START,
  };
};

export const fetchUsersSuccess = (payload) => {
  return {
    type: types.FETCH_USERS.SUCCESS,
    payload,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: types.FETCH_USERS.FAILURE,
    payload: error,
  };
};
