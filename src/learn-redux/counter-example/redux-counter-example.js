import { createStore } from "redux";
import reducers from "./reducers";
import * as React from "react";

const store = createStore(reducers);
export default class ReduxCounterExample extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: store.getState()
    }
  }
  handleClick = () => {
    store.dispatch({type: "INCREMENT"});
    this.setState({value: store.getState()});
  }
  render() {
    return (
      <button onClick={this.handleClick}>{ this.state.value }</button>
    )
  }
}
