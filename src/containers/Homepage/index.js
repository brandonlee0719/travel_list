import React, {Component} from 'react'
import {connect} from 'react-redux';
import HomePage from '../../components/Homepage';

const mapStateToProps = (state, ownProps) => {
  return {
    touristList: state.homepage.touristList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);