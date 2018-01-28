import React, { Component } from 'react';
import { StyleSheet, Text, View,
  Alert,
  TouchableOpacity,
 } from 'react-native';
 import AnswerOption from './AnswerOption';
 
//import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
const optionHeight = 170;
const optionWidth = 170;

export default class AnswerOptionsContainer extends Component {
    _makeAnswerOption(option) {
      return <AnswerOption 
        key={option.id}
        onPressButton={this.props.onPressButton}
        showResult={this.props.showResult}
        width={optionHeight}
        height={optionWidth}
        id={option.id}
        uri={option.uri}
      />
    }
    
    render() {
        const options = this.props.answerOptions
        .map(option => {
          return this._makeAnswerOption(option)
      });
      
      return (
        <View style={{
            flex: 4,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
        }}>
          {options}
        </View>
      );
    }
}
