import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 10,
    flexDirection: 'row',
    borderWidth: 0.5,
    marginBottom: 5,
    borderColor: 'white',
  },
  progressBar: {
    overflow: 'hidden',
  },
  progressBarLeft: {
    backgroundColor: 'royalblue',
  },
  progressBarRight: {
    backgroundColor: 'white',
  },
});

const ProgressBar = ({
  progress,
}) => (
  <View style={styles.container} >
    <View style={styles.progressBar} />
    <View style={[styles.progressBarLeft, { flex: progress }]} />
    <View style={[styles.progressBarRight, { flex: 100 - progress }]} />
  </View>
);
export default ProgressBar;
