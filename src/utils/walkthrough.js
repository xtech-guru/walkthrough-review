import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tooltipText: {
    color: 'black',
    fontSize: 15
  }
});

const makeTooltipContent = (text) => (
  <Text style={styles.tooltipText}>{text}</Text>
);

export default [
  {
    id: 'btn-add',
    content: makeTooltipContent('Click here to create new item'),
    placement: 'left'
  },
  {
    id: 'btn-search',
    content: makeTooltipContent('Click to search for item'),
    placement: 'left'
  },
  {
    id: 'btn-settings',
    content: makeTooltipContent('Click to enter settings'),
    placement: 'left'
  }
];
