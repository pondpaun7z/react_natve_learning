import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


class Card extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return(
      <View style={styles.cardWrapper}>
        <Button title={this.props.post.title}
          onPress={() => navigate('PostDetail', { postId: this.props.post.id })}
          backgroundColor="#fff"
          color="#000" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginTop: 2,
    marginHorizontal: 2,
    marginBottom: 5,
  },
  cardTitle: {
    padding: 10,
    color: '#000',
    backgroundColor: '#fff'
  }
})


export default Card
