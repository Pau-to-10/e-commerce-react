import { types } from "../types/types";

// const initialState = {
//   isLogged: false,
//   user
// };

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        isLogged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};
