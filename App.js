import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import axios from 'axios';

export default class FetchExample extends Component {

  constructor(props) {
    super(props);
    this.state ={ isLoading: true }
  }

  componentDidMount() {
    return axios.get('https://facebook.github.io/react-native/movies.json')
      .then((response) => {
        console.log(response.data.movies)
        this.setState({
          isLoading: false,
          dataSource: response.data.movies
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {

    if (this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
