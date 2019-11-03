import Counter from "../components/Counter";
import * as actions from "../actions/actions";
import { connect } from "react-redux";

// store 안의 state 값을 props 로 연결해 준다.
const mapStateToProps = state => ({
  color: state.color,
  number: state.number
});
// 액션 생성자를 사용하여 액션을 생성하고
// 해당 액션을 dispatch 하는 함수를 만든 후 이를 props 로 연결해 준다.
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: "INCREMENT" }),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = "black"; //임시
    dispatch(actions.setColor(color));
  }
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
