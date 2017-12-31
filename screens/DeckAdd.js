import React, { Component } from 'react';
import { Text, View } from 'react-native';

import HeaderAction from '../components/HeaderAction';
import * as styles from '../styles/common';

class DeckAdd extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <HeaderAction icon="ios-arrow-back-outline" onPress={() => navigation.goBack()} />,
    headerStyle: styles.header,
  });

  render() {
    return (
      <View style={styles.screen}>
        <Text>Add new deck</Text>
      </View>
    );
  }
}

export default DeckAdd;
