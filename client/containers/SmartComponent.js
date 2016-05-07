import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getStarted } from '../actions';
import DumbComponent from '../components/DumbComponent';

class SmartComponent extends Component {
  componentWillMount() {
    this.props.dispatch(getStarted());
  }
  render() {
    return (
      <div>
        <DumbComponent welcomeText="hello world!" />
      </div>
    );
  }
}

SmartComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(SmartComponent);
