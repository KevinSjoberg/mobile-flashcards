import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    color: 'white',
    padding: 20,
  },
});

const DeckHeader = () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Ionicons name="ios-add-circle-outline" size={45} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default DeckHeader;
