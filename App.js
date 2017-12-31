import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import AddDeck from './screens/AddDeck';
import Decks from './screens/Decks';

const store = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const Navigation = StackNavigator({
  Deck: {
    screen: Decks,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#95384d',
        borderBottomWidth: 0,
      },
      headerRight: <TouchableOpacity onPress={() => navigation.navigate('AddDeck')}><Ionicons name="ios-add-circle-outline" size={35} style={{ color: 'white', paddingTop: 16, paddingRight: 16 }} /></TouchableOpacity>,
    }),
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#95384d',
        borderBottomWidth: 0,
      },
      headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="ios-arrow-back-outline" size={35} style={{ color: 'white', paddingTop: 16, paddingLeft: 16 }} /></TouchableOpacity>,
    }),
  },
});

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Navigation />
    </View>
  </Provider>
);
