import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from './components/Header'

import PageOne from './containers/PageOne'
import PageTwo from './containers/PageTwo'

import { createStackNavigator } from 'react-navigation'

export const Navigator = new createStackNavigator({
  PageOne: { screen: PageOne },
  PageTwo: { screen: PageTwo },
},{
  initialRouteName: 'PageOne',
})

class MainApp extends Component {
  render() {
    return(
      <View>
        <Header />
        <Text>App</Text>
        <Navigator />
      </View>
    )
  }
}

export default MainApp;
