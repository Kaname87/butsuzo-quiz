import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Title = () => (
  <View style={styles.container}>
    <Text style={styles.header}>仏像四択</Text>
  </View>
);

export default Title;

const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    marginBottom: 50,
    flexDirection:'row',
    justifyContent: 'center',
    height: 20,
    alignItems:'center',
  },
  header: {
    alignSelf: 'center',
    color: '#444',
    fontSize: 35,
  }
});
