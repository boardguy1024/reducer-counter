import * as types from "../actions/ActionTypes";

const INITIAL_STATE = {
  color: "black"
};

const color = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_COLOR:
      return {
        color: action.color
      };
    default:
      return state;
  }
};

export default color;
