import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

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
  },
});

const AnswerOption = ({
  showResult,
  onSelectAnswer,
  id,
  width,
  height,
  uri,
}) => {
  const containerStyle = StyleSheet.flatten([styles.containerBase, {
    width,
    height,
  }]);

  return (
    <TouchableOpacity
      disabled={showResult}
      onPress={() => onSelectAnswer(id)}
    >
      <View style={containerStyle}>
        <Image source={{ uri }}
          style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default AnswerOption;

AnswerOption.propTypes = {
  showResult: PropTypes.bool.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
};
