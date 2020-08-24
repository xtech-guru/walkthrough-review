import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4
  }
});

const Fab = function ({ onPress, backgroundColor }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}>
      <MaterialIcon name="add" size={23} color="#ffffff" />
    </TouchableOpacity>
  );
};

export default Fab;
