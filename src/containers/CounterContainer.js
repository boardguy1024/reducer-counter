import Counter from "../components/Counter";
import * as actions from "../actions/actions";
import { connect } from "react-redux";

import { getRandomColor } from "../utils/index";

// store 안의 state 값을 props 로 연결해 준다.
const mapStateToProps = state => ({
  color: state.colorData.color,
  number: state.numberData.number
});
// 액션 생성자를 사용하여 액션을 생성하고
// 해당 액션을 dispatch 하는 함수를 만든 후 이를 props 로 연결해 준다.
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: "INCREMENT" }),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    dispatch(actions.setColor(getRandomColor()));
  }
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
