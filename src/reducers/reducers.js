import * as types from "../actions/ActionTypes";

//初期状態を定義
const INITIAL_STATE = {
  color: "black",
  number: 0
};

/*
reducer関数を定義します。

下記のようなreturn state というのは
新しい state を作って return してるので書き換えになっている。
return {
     ...state,
     number: state.number + 1 
}
 */
function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state, //既存stateと
        number: state.number + 1 //変更したい要素を追加
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
}

export default counter;
