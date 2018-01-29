import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
 } from 'react-native';
 
const Button = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.loginScreenButton}
      onPress={onPress}
      underlayColor="#fff"
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
 }

export default Button;

const styles = StyleSheet.create({
  loginScreenButton:{
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'grey',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
  text:{
    color:'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  }
});
