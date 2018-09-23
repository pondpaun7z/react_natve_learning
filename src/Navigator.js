import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStackNavigator, addNavigationHelpers } from 'react-navigation'
import PageOne from './containers/PageOne'
import PageTwo from './containers/PageTwo'

export const Navigator = new createStackNavigator({
  PageOne: { screen: PageOne },
  PageTwo: { screen: PageTwo },
},{
  initialRouteName: 'PageOne',
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
