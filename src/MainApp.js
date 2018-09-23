import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Header from './components/Header'

class MainApp extends Component {
  render() {
    return(
      <View>
        <Header />
        <Text>App</Text>
      </View>
    )
  }
}

export default MainApp;
