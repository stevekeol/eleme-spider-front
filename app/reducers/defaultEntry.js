/*
 * @file reducers for default
 */

import * as ActionTypes from '../actions';

const initialState = {
  isFetching: false,
  totalStoresCount: 0,
  spideredCitys: 0,
  currentCity: '-',
  currentState: '-',
  items: [] // 已经爬取的所有商家数组(省份,城市，结束时间，商家总数，爬取状态)
};

const { pendingOf, fulfilledOf } = ActionTypes;

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(payload);

  switch (type) {

    case pendingOf(ActionTypes.GET_SPIDER_SUMMARY_DATA):
      return {
        ...state,
        isFetching: true,
      };

    case fulfilledOf(ActionTypes.GET_SPIDER_SUMMARY_DATA):
      return {
        ...state,
        isFetching: false,
        ...payload,
      };

    default:
      return state;
  }
}
