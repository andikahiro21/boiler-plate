import { SET_ADD_INFO, SET_PLAN_INFO, SET_USER_INFO } from './constants';
import { produce } from 'immer';

export const initialState = {
  payment: {},
};

export const storedKey = ['payment'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_USER_INFO:
        draft.payment = { user: action.userInfo };
        break;
      case SET_PLAN_INFO:
        draft.payment = { ...state.payment, plan: action.planInfo };
        break;
      case SET_ADD_INFO:
        draft.payment = { ...state.payment, add: action.addInfo };
        break;
    }
  });

export default homeReducer;
