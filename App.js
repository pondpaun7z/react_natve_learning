import React, { Component } from 'react';
import { View  } from 'react-native';
import MainApp from './src/MainApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers';

const store = createStore(reducer);

class App extends Component {

  render() {
    return(
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}


export default App
