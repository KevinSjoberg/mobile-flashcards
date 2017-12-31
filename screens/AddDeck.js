import { Constants } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#95384d',
    flex: 1,
  },
});

export default () => (
  <View style={styles.container}>
    <Text>ADD DECK</Text>
  </View>
);
