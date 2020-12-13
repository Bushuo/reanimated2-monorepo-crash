import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SwipeableRow from './SwipeableRow';

const styles = StyleSheet.create({
  foreground: {
    flex: 1,
    backgroundColor: 'red',
    height: 32,
  },
  background: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

const Row = () => {
  return (
    <SwipeableRow>
      <View style={styles.foreground}>
        <Text>test</Text>
      </View>
    </SwipeableRow>
  );
};

export default Row;
