import React from 'react';
import { View, Text } from 'react-native';
import { BASE_URL } from '../constants';
import axios from 'axios';

class PostDetail extends React.Component {
  static navigationOptions = {
    title: 'Detail'
  };

  constructor(props) {
    super(props)
    this.state = { post: {}}
  }

  componentDidMount() {
    this.loadPost();
  }

  render() {
    return(
      <View>
        <Text>{this.state.post.title}</Text>
        <Text>{this.state.post.body}</Text>
      </View>
    )
  }

  loadPost = () => {
    const { params } = this.props.navigation.state

    axios.get(`${BASE_URL}/posts/${params.postId}`)
      .then((response) => {
        this.setState({
          post: response.data
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }
}

export default PostDetail;
