import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WalkthroughElement } from 'react-native-walkthrough';

import { Fab } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fabContainer: {
    position: 'absolute',
    right: 16,
    bottom: 16
  }
});

const TabOne = function () {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <View style={styles.fabContainer}>
        <WalkthroughElement id="btn-add">
          <Fab backgroundColor="#34a853" />
        </WalkthroughElement>
      </View>
    </View>
  );
};

export default TabOne;
