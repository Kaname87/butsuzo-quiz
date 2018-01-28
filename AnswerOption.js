import React, { Component } from 'react';
import { StyleSheet, Text, View,
  Image,
  TouchableOpacity,
 } from 'react-native';
//import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class AnswerOption extends Component {
    render() {
      return (
        <TouchableOpacity
          disabled={this.props.showResult}
          onPress={() => this.props.onSelectAnswer(this.props.id)}
        >
          <View style={{
            width: this.props.width,
            height: this.props.height,
            // flex: 1,
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#d6d7da',
            alignItems: 'stretch',
          }}>
            <Image source={{uri: this.props.uri}}
              style={{
                flex: 1,
                // width: this.props.width,
                // height: this.props.height,
                resizeMode: 'contain',
              }} />
          </View>
        </TouchableOpacity>
      );
    }
}
