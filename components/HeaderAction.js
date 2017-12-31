import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import * as styles from '../styles/common';

const HeaderAction = ({ icon, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons name={icon} size={35} style={styles.headerAction} />
  </TouchableOpacity>
);

export default HeaderAction;
