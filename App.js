import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import Deck from './screens/Deck';
import configureStore from './configureStore';

const store = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Deck />
    </View>
  </Provider>
);
