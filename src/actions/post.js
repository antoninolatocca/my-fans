import { ActionType } from '../constants/ActionType';
import { api } from '../services/api';
import { getErrors } from './error';

export const postingSuccess = () => ({
    type: ActionType.ADD_POST
  });

export const addPost = (performerId, text) => async (dispatch) => {
    try {
      await api.post('/posts/add', { performerId, text });
      dispatch(postingSuccess());
    } catch (error) {
      dispatch(getErrors(error.response.data, error.response.status));
    }
  };