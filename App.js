import React, { Component } from 'react';
import { View  } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import navigation from './src/reducers';

import { Navigator } from './src/Navigator'


const reducer = combineReducers({ navigation })
const store = createStore(reducer, applyMiddleware(logger));


class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}


export default App
