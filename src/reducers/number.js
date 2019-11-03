import * as types from "../actions/ActionTypes";

const INITIAL_STATE = {
  number: 0
};

const number = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    default:
      return state;
  }
};

export default number;
