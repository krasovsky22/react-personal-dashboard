import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { clickStart, clickEnd } from "../modules/test";

class Test extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.clickStart}>click Start</button>
        <button onClick={this.props.clickEnd}>click End</button>
        {this.props.action}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("current state", state);
  return {
    action: state.test.action
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clickStart,
      clickEnd
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Test);
