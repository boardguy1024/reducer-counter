import { connect } from "react-redux";
import Counter from "../components/Counter.component";

import * as actions from "../actions/actions";

const mapStateToProps = state => ({
  number: state.number,
  color: state.color
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.setIncrement()),
  onDecrement: () => dispatch(actions.setDecrement())
});
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
