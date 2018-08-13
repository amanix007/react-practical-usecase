import React, { Component } from 'react';

import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import { history, store } from './store';
import Home from './container/Home';



import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
