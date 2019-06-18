/*
 * @file reducers for default
 */

import * as ActionTypes from '../actions';

const initialState = {
  isFetching: false,
  resteraunts: undefined, // 待生成excel的数据
};

const { pendingOf, fulfilledOf } = ActionTypes;

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(action);

  switch (type) {

    case pendingOf(ActionTypes.EXPORT_DATA_TO_EXCEL):
      return {
        ...state,
        isFetching: true,
      };

    case fulfilledOf(ActionTypes.EXPORT_DATA_TO_EXCEL):
      return {
        ...state,
        isFetching: false,
        ...payload
      };

    default:
      return state;
  }
}
