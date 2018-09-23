import React from 'react'
import { View, Text, Button } from 'react-native'

class PageTow extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    const { params } = this.props.navigation.state
    return(
      <View>
        <Text style={{textAlign: 'center'}}>PageTwo - {params.name}</Text>
        <Button onPress={() => navigate('PageOne')}
          title="PageOne" />
      </View>
    )
  }
}

export default PageTow
