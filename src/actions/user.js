import { ActionType } from '../constants/ActionType';
import { api } from '../services/api';

export const loginSuccess = (user) => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: { user }
});

export const loginFailure = (error) => ({
  type: ActionType.LOGIN_FAILURE,
  payload: { error }
});

export const logoutSuccess = () => ({
  type: ActionType.LOGOUT_SUCCESS
});

export const logoutFailure = (error) => ({
  type: ActionType.LOGOUT_FAILURE,
  payload: { error }
});

export const registerSuccess = () => ({
  type: ActionType.REGISTER_SUCCESS
});

export const registerFailure = (error) => ({
  type: ActionType.REGISTER_FAILURE,
  payload: { error }
});

export const fetchUserPostsSuccess = (posts) => ({
  type: ActionType.FETCH_USER_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchUserPostsFailure = (error) => ({
  type: ActionType.FETCH_USER_POSTS_FAILURE,
  payload: { error }
});

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    const user = response.data;
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.response.data.error));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await api.post('/auth/logout');
    localStorage.removeItem('user');
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error.response.data.error));
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    await api.post('/auth/register', { name, email, password });
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailure(error.response.data.error));
  }
};

export const fetchUserPosts = () => async (dispatch) => {
  try {
    const response = await api.get('/posts');
    const posts = response.data;
    dispatch(fetchUserPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchUserPostsFailure(error.response.data.error));
  }
};
