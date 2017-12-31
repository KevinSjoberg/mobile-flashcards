import { Constants } from 'expo';
import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Deck from './Deck';
import { getDecks } from '../reducers';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(149, 56, 77)',
    marginTop: Constants.statusBarHeight,
  },
});

const DeckList = ({ decks }) => (
  <FlatList
    style={styles.container}
    data={decks}
    keyExtractor={item => item.id}
    renderItem={({ item }) => <Deck {...item} />}
  />
);

DeckList.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  decks: getDecks(state),
});

export default connect(mapStateToProps)(DeckList);
