import { createSelector } from 'reselect';
import { initialState } from './reducer';

const getPaymentInfo = (state) => state.home || initialState;

export const selectPayment = createSelector(getPaymentInfo, (state) => state.payment);
