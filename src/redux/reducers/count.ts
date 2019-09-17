/*
 * @Description: reducer
 * @Author: 执念
 * @Date: 2019-09-16 21:22:48
 * @LastEditTime: 2019-09-16 21:30:09
 * @LastEditors: Please set LastEditors
 */
const ADD_COUNT = 'ADD_COUNT';

const initState = {
  count: 0
};

const add = (state: any, { payload }: any) => {
  return Object.assign({}, state, {
    count: payload.count
  });
};

const addReducer = (state = initState, action: { type: any }) => {
  switch (action.type) {
    case ADD_COUNT:
      return add;
    default:
      return state;
  }
};

export default addReducer;
export { addReducer };
