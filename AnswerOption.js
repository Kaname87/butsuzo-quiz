import React, { Component } from 'react';
import { StyleSheet, Text, View,
  Image,
  TouchableOpacity,
 } from 'react-native';

const AnswerOption = ({
  showResult,
  onSelectAnswer,
  id,
  width,
  height,
  uri,
}) => {
  const {
    containerBase,
    image,
  } = styles;
  const corainerStyle = StyleSheet.flatten([containerBase, {
    width,
    height,
  }]);

  return (
    <TouchableOpacity
      disabled={showResult}
      onPress={() => onSelectAnswer(id)}
    >
      <View style={corainerStyle}>
        <Image source={{uri}}
          style={image} />
      </View>
    </TouchableOpacity>
  );
}
export default AnswerOption;

const styles = StyleSheet.create({
  containerBase: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    alignItems: 'stretch',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  }
});