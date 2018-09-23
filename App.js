import React, { Component } from 'react';
import { View  } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Nav from './src/Navigator'



class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}

export default App
