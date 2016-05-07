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
        <DumbComponent welcomeText={this.props.welcomeText} />
      </div>
    );
  }
}

SmartComponent.propTypes = {
  welcomeText: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(SmartComponent);
