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
    store.subscribe(() => this.handleChange(store.getState().signedIn))
    this.bootstrapAsync()
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.handleChange(userToken)
  };

  handleChange = (signedIn) => {
    if (signedIn) {
      this.props.navigation.navigate('PostList');
    } else {
      this.props.navigation.navigate('PageOne');
    }
  }

  render() {
    return (
      <ActivityIndicator />
    );
  }
}


export default AuthLoadingScreen;
