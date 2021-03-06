import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, addNavigationHelpers } from 'react-navigation';

import PageOne from './containers/PageOne';
import PageTwo from './containers/PageTwo';
import AuthLoadingScreen from './containers/AuthLoadingScreen';
import SignInScreen from './containers/SignInScreen';
import PostList from './containers/PostList';
import PostDetail from './containers/PostDetail';

export const Navigator = new createStackNavigator({
  PageOne: { screen: PageOne },
  PageTwo: { screen: PageTwo },
  AuthLoadingScreen: { screen: AuthLoadingScreen },
  SignInScreen: { screen: SignInScreen },
  PostList: { screen: PostList },
  PostDetail: { screen: PostDetail },
},{
  initialRouteName: 'AuthLoadingScreen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation
})

export default connect(mapStateToProps)(Nav)
