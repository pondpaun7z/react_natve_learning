import React from 'react'
import { View, Text, Button, AsyncStorage} from 'react-native'
import axios from 'axios';
import { connect } from 'react-redux'
import { BASE_URL } from '../constants';
import * as actions from '../actions';

class PostList extends React.Component {
  static navigationOptions = {
    title: 'ร้านไหนดี'
  };

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return(
      <View>
        <Button onPress={() => this.signOut()}
                title="Sign out" />
      </View>
    )
  }

  signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoadingScreen');
  };

  loadPosts = () => {
    axios.get(`${BASE_URL}/posts`)
      .then(function (response) {
        // handle success
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
}

const mapStateToProps = state => ({

})


export default connect(mapStateToProps, actions)(PostList)

