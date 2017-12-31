import React, { Component } from 'react';
import { View } from 'react-native';

import DeckList from '../components/DeckList';
import HeaderAction from '../components/HeaderAction';
import * as styles from '../styles/common';


class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <HeaderAction icon="ios-add-circle-outline" onPress={() => navigation.navigate('DeckAdd')} />,
    headerStyle: styles.header,
  });

  render() {
    return (
      <View style={styles.screen}>
        <DeckList />
      </View>
    );
  }
}

export default Deck;
