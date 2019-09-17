import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import NotFound from '../views/NotFound';

class ExRouter extends Component {
  public render(): JSX.Element {
    return (
      <Router>
        <Switch>
          {/* <Route exact path='/' render={() => <Redirect to='/app/dashboard/index' push/>} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/app" component={Home} />
          <Route path="/404" component={NotFound} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default ExRouter;
export { ExRouter };
