import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#893347',
    padding: 30,
  },
  text: {
    color: 'white',
    fontSize: 35,
  },
  subText: {
    color: '#702a3a',
    fontSize: 20,
  },
});

const Deck = ({ title, cards }) => (
  <View style={styles.container}>
    <TouchableOpacity style={{ alignItems: 'center' }}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.subText}>{cards.length} cards</Text>
    </TouchableOpacity>
  </View>
);

Deck.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Deck;
