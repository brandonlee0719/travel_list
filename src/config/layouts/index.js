import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import RouterComponent from '../router';

class LayoutsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="layout-container">
          <RouterComponent/>
        </div>
      </BrowserRouter>
    )
  }
}

export default LayoutsContainer;