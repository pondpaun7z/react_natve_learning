import React, { Component } from 'react';
import { View  } from 'react-native';
import MainApp from './src/MainApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers';
import { Navigator } from './src/Navigator'

const store = createStore(reducer);


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
