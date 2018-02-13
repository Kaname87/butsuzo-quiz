import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';
import AnswerOption from './AnswerOption';

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const optionHeight = 170;
const optionWidth = 170;

export default class AnswerOptionsList extends Component {
  _makeAnswerOption (option) {
    return (
      <AnswerOption
        key={option.id}
        onSelectAnswer={this.props.onSelectAnswer}
        showResult={this.props.showResult}
        width={optionHeight}
        height={optionWidth}
        id={option.id}
        uri={option.uri}
      />
    );
  }

  render () {
    const options = this.props.answerOptions.map(option => {
      return this._makeAnswerOption(option);
    });

    return (
      <View style={styles.container}>
        {options}
      </View>
    );
  }
}

AnswerOptionsList.propTypes = {
  onSelectAnswer: PropTypes.func.isRequired,
  showResult: PropTypes.bool.isRequired,
  answerOptions: PropTypes.array.isRequired,
};
