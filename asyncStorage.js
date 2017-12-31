import { AsyncStorage } from 'react-native';

export const STATE_KEY = '084f9d58-33d5-4029-9d74-1cb708176ee8';

export const loadState = async () => {
  try {
    const serializedState = await AsyncStorage.getItem(STATE_KEY);
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = async (state) => {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem(STATE_KEY, serializedState);
  } catch (err) {
    // Handle error
  }
};
