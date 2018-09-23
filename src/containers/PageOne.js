import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class PageOne extends React.Component {
  static navigationOptions = {
    title: 'Page One'
  };

  signIn() {
    this.props.signIn(true)
  }

  goToLogin() {
    this.props.navigation.navigate('SignInScreen');
  }

  render() {
    const { navigate } = this.props.navigation

    return(
      <View>
        <Text style={{textAlign: 'center'}}>PageOne</Text>
        <Button onPress={() => navigate('PageTwo', { name: 'Pond' })}
          title="PageTwo" />

        <Button onPress={() => this.signIn()}
          title="Sign In" />

        <Button onPress={() => this.goToLogin()}
          title="Login" />
      </View>
    )
  }
}

const mapStateToProps = state => ({

})


export default connect(mapStateToProps, actions)(PageOne)

