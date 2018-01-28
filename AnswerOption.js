import React, { Component } from 'react';
import { StyleSheet, Text, View,
  Alert,
  TouchableOpacity,
 } from 'react-native';
//import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class AnswerOption extends Component {
    render() {
      return (
        <TouchableOpacity onPress={this.props.onPressButton}>
          <View style={{
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.backgroundColor,
          }} />
        </TouchableOpacity>
      );
    }
}