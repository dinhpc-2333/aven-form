import * as types from "./types";

const INITIAL_STATE = {
  users: null,
  error: null,
  loading: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USERS.START:
      return {
        ...state,
        users: null,
        error: null,
        loading: true,
      };

    case types.FETCH_USERS.SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
        loading: false,
      };

    case types.FETCH_USERS.FAILURE:
      return {
        ...state,
        users: null,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
