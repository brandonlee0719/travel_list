import React, {Component} from 'react';
import {
  Route,
  Switch
} from 'react-router';
// import Headers from '../containers/Headers'`;
// import Footers from '../containers/Footers';`
import Homepage from '../containers/Homepage';

class RouterComponent extends Component {
  render() {
    return (
      <div style={{height: '100vh', display: 'flex'}}>
        {/*<Headers />*/}
        <Switch>
          <Route path="/" component={Homepage}/>
        </Switch>
        {/*<Footers /> */}
      </div>
    )
  }
}

export default RouterComponent;
