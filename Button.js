import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
 } from 'react-native';

const Button = ({
  title,
  onPress,
  textColor='white',
}) => {

  const textStyle = StyleSheet.flatten([styles.text, {
    color: textColor,
  }]);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      underlayColor="#fff"
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
 }

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'grey',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  }
});
