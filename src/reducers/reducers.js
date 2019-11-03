import * as types from "../actions/ActionTypes";
import { stat } from "fs";

const INITIAL_STATE = {
  counters: [
    {
      color: "black",
      number: 0
    }
  ]
};

function counter(state = INITIAL_STATE, action) {
  const { counters } = state;
  switch (action.type) {
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
      };
    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length - 1)
      };

    case types.INCREMENT:
      return {
        counters: [
          // 0 ~ action.index 사이의 아이템들을 잘라와서 이 자리에 넣는다.
          ...counters.slice(0, action.index),
          {
            ...counters[action.index], // 기존 값은 유지하면서
            number: counters[action.index].number + 1 // number 값을 덮어쓴다.
          },
          // 마지막으로 index 뒤의 데이터들을 추가해준다.
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };

    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color: action.color
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    default:
      return state;
  }
}

export default counter;
