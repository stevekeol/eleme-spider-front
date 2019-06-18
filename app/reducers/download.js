/*
 * @file reducers for default
 */

import * as ActionTypes from '../actions';

const initialState = {
  isFetching: false,
  items: [], // 已经爬取的所有商家数组(省份,城市，结束时间，商家总数，爬取状态)
  // test: [] // 待生成excel的数据
};

const { pendingOf, fulfilledOf } = ActionTypes;

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case pendingOf(ActionTypes.GET_CITY_SPIDER_INFO):
      return {
        ...state,
        isFetching: true,
      };

    case fulfilledOf(ActionTypes.GET_CITY_SPIDER_INFO):
      return {
        ...state,
        isFetching: false,
        ...payload,
      };

    default:
      return state;
  }
}
