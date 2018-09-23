import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { store } from '../store'
import { signIn } from '../actions'

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    store.subscribe(() => this.handleChange())
    store.dispatch(signIn(false))
  }

  handleChange = () => {
    const signedIn = store.getState().signedIn
    if (signedIn) {
      this.props.navigation.navigate('PostList');
    } else {
      this.props.navigation.navigate('PageOne');
    }
  }

  // Render any loading content that you like here
  render() {


    return (
      <ActivityIndicator />
    );
  }
}


export default AuthLoadingScreen;
