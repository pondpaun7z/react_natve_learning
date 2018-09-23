import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

class PageOne extends React.Component {
  render() {
    const { navigate } = this.props.navigation

    return(
      <View>
        <Text style={{textAlign: 'center'}}>PageOne</Text>
        <Button onPress={() => navigate('PageTwo', { name: 'Pond' })}
          title="PageTwo" />
      </View>
    )
  }
}

export default PageOne
