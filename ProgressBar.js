import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const ProgressBar = ({
  progress,
}) => (
  <View style={styles.container} >
    <View style={styles.progressBar} />
     <View style={[styles.progressBarLeft, {flex: progress}]} />
    <View style={[styles.progressBarRight, {flex: 100 - progress}]} />
  </View>
);
export default ProgressBar;

const styles = StyleSheet.create({
  container: {
     flex: 0.3,
     flexDirection: 'row',
     borderWidth: 1,
     borderRadius: 5,
     marginBottom: 5,
     borderColor: 'lightblue',
  },
  progressBar: {
     overflow: 'hidden',
     height: 6,
  },
  progressBarLeft: {
    backgroundColor: 'royalblue',
    borderRadius: 5,
  },
  progressBarRight: {
    backgroundColor: 'white',
    borderRadius: 5,
  }
});
