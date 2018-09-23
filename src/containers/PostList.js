import React from 'react'
import { View, Text, Button, AsyncStorage, FlatList } from 'react-native'
import axios from 'axios';
import { connect } from 'react-redux'
import { BASE_URL } from '../constants';
import { store } from '../store'
import { signIn } from '../actions'

class PostList extends React.Component {
  static navigationOptions = {
    title: 'ร้านไหนดี'
  };

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return(
      <View>
        <Button onPress={() => this.signOut()}
                title="Sign out" />

        <FlatList
          data={this.state.posts}
          renderItem={({item}) => <Text>{item.title}</Text> }
          keyExtractor={({id}, index) => id.toString()}
        />

      </View>
    )
  }

  signOut = async () => {
    await AsyncStorage.clear();
    store.dispatch(signIn(false))
  };

  loadPosts = () => {
    axios.get(`${BASE_URL}/posts`)
      .then((response) => {
        console.log(response)
        this.setState({
          posts: response.data
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };
}

const mapStateToProps = state => ({

})


export default PostList

