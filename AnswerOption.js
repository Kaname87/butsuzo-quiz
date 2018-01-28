import React, { Component } from 'react';
import { StyleSheet, Text, View,
  Image,
  TouchableOpacity,
 } from 'react-native';
//import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class AnswerOption extends Component {
    render() {
      return (
        <TouchableOpacity onPress={() => this.props.onPressButton(this.props.id) }>
          <View style={{
            width: this.props.width,
            height: this.props.height,
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#d6d7da',
          }}>
            <Image source={{uri: this.props.uri}}
              style={{
                width: this.props.width,
                height: this.props.height,
                resizeMode: 'contain',
              }} />
          </View>
        </TouchableOpacity>
      );
    }
}