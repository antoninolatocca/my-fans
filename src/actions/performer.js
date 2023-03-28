import { ActionType } from '../constants/ActionType';
import { api } from '../services/api';

export const fetchPerformers = () => async (dispatch) => {
  try {
    const response = await api.get('/performers');
    dispatch({
      type: ActionType.FETCH_PERFORMERS,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchPerformer = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/performers/${id}`);
    dispatch({
      type: ActionType.FETCH_PERFORMER,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createPerformer = (performerData) => async (dispatch) => {
  try {
    const response = await api.post('/performers', performerData);
    dispatch({
      type: ActionType.CREATE_PERFORMER,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updatePerformer = (id, performerData) => async (dispatch) => {
  try {
    const response = await api.put(`/performers/${id}`, performerData);
    dispatch({
      type: ActionType.UPDATE_PERFORMER,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deletePerformer = (id) => async (dispatch) => {
  try {
    await api.delete(`/performers/${id}`);
    dispatch({
      type: ActionType.DELETE_PERFORMER,
      payload: id,
    });
  } catch (error) {
    console.error(error);
  }
};
