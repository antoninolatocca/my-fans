import { ActionType } from "../constants/ActionType";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REGISTER_SUCCESS:
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        error: null,
      };
    case ActionType.REGISTER_REQUEST:
    case ActionType.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.REGISTER_FAILURE:
    case ActionType.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
