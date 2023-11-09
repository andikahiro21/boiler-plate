import { SET_USER_INFO, SET_PLAN_INFO, SET_ADD_INFO } from './constants';

export const setUser = (userInfo) => {
  console.log(userInfo, '<<<user');
  return {
    type: SET_USER_INFO,
    userInfo,
  };
};

export const setPlan = (planInfo) => {
  return {
    type: SET_PLAN_INFO,
    planInfo,
  };
};

export const setAddOns = (addInfo) => {
  return {
    type: SET_ADD_INFO,
    addInfo,
  };
};
