import { ActionType } from "../constants/ActionType";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_POSTS:
      return {
        ...state,
      };
    case ActionType.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
};
