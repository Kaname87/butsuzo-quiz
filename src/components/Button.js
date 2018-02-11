import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
 } from 'react-native';

const Button = ({
  title,
  onPress,
  labelColor='white',
  buttonColor='grey',
}) => {
  const buttonStyle = StyleSheet.flatten([styles.button, {
    backgroundColor: buttonColor,
  }]);

  const textStyle = StyleSheet.flatten([styles.text, {
    color: labelColor,
  }]);

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      underlayColor="#fff"
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingTop: 15,
    paddingBottom: 15,
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
