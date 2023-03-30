import { ActionType } from '../constants/ActionType';
import { api } from '../services/api';

export const updateAccount = (id, accountData) => async (dispatch) => {
    try {
      const response = await api.put(`/account/${id}`, accountData);
      dispatch({
        type: ActionType.UPDATE_ACCOUNT,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };