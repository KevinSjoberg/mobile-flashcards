import { Constants } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import DeckList from '../components/DeckList';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#95384d',
    flex: 1,
  },
});

export default ({ navigation }) => (
  <View style={styles.container}>
    <DeckList />
  </View>
);
