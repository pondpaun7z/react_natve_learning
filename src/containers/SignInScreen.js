import React from 'react'
import { View, Button, AsyncStorage } from 'react-native'
import { store } from '../store'
import { signIn } from '../actions'

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    store.dispatch(signIn(true))
    await AsyncStorage.setItem('userToken', 'abc');
  };
}

export default SignInScreen;
