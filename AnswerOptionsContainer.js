import React, { Component } from 'react';
import { StyleSheet, Text, View,
  Alert,
  TouchableOpacity,
 } from 'react-native';
 import AnswerOption from './AnswerOption';
//import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
const optionHeight = 200;
const optionWidth = 200;

export default class AnswerOptionsContainer extends Component {
    _onPressButton() {
      Alert.alert('You tapped the button!')
    }
    
    render() {
      return (
        <View style={{
            flex: 5,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // justifyContent: 'space-between',
          }}>
          <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
              // justifyContent: 'space-between',
          }}>
            <AnswerOption 
              onPressButton={this._onPressButton}
              width={optionHeight}
              height={optionWidth}
              backgroundColor={'yellow'}
            />
            <AnswerOption 
              onPressButton={this._onPressButton}
              width={optionHeight}
              height={optionWidth}
              backgroundColor={'skyblue'}
            />
          </View>
          <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start',
              // justifyContent: 'space-between',
            }}>
            <AnswerOption 
              onPressButton={this._onPressButton}
              width={optionHeight}
              height={optionWidth}
              backgroundColor={'purple'}
            />
            <AnswerOption 
              onPressButton={this._onPressButton}
              width={optionHeight}
              height={optionWidth}
              backgroundColor={'red'}
            />
          </View>
        </View>
      );
    }
}