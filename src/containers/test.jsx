import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { clickStart, clickEnd } from "../reducers/test";

class Test extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.clickStart}>click Start</button>
        <button onClick={this.props.clickEnd}>click End</button>
        {this.props.action}
        Current Id: {this.props.match.params.id}
      </div>
    );
  }
}

const mapStateToProps = state => {
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
