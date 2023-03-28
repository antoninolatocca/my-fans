import { ActionType } from "../constants/ActionType";

// RETURN ERRORS
export const getErrors = (err) => {
  const errorPayload = err.response.data;
  return {
    type: ActionType.GET_ERRORS,
    payload: errorPayload,
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: ActionType.CLEAR_ERRORS,
  };
};

// SET ERRORS
export const setErrors = (err) => {
  const errorPayload = err.response.data;
  return {
    type: ActionType.GET_ERRORS,
    payload: errorPayload,
  };
};
