import { Constants } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import DeckHeader from '../components/DeckHeader';
import DeckList from '../components/DeckList';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(149, 56, 77)',
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default () => (
  <View style={styles.container}>
    <DeckHeader />
    <DeckList />
  </View>
);
