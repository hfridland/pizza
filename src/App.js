import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Sales from './containers/Sales/Sales';
import Reports from './containers/Reports/Reports';

import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Sales} />
        <Route path='/Reports' exact component={Reports} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
}

export default App;

/***
 *       <Switch>
        <Route path='/' exact component={Sales} />
        <Redirect to='/' />
      </Switch>

 */