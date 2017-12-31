import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import Deck from './screens/Deck';
import DeckAdd from './screens/DeckAdd';

const store = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const Navigation = StackNavigator({
  Deck: {
    screen: Deck,
  },
  DeckAdd: {
    screen: DeckAdd,
  },
});

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Navigation />
    </View>
  </Provider>
);
