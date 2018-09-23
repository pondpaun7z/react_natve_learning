import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native';
import { signIn } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class PageOne extends React.Component {
  static navigationOptions = {
    title: 'Page One'
  };

  signIn() {
    this.props.signIn(true)
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
      </View>
    )
  }
}

const mapStateToProps = state => ({
  // navigation: state.navigation
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signIn }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PageOne)

