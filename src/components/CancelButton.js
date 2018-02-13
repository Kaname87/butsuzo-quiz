import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  button: {
    marginRight: 5,
    marginBottom: 5,
    paddingRight: 2,
    paddingLeft: 2,
    borderRadius: 90,
  },
  text: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CancelButton = ({
  onPress,
  labelColor,
  buttonColor,
}) => {
  const buttonStyle = StyleSheet.flatten([styles.button, {
    backgroundColor: buttonColor,
  }]);

  const textStyle = StyleSheet.flatten([styles.text, {
    color: labelColor,
  }]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={onPress}
        underlayColor="#fff"
      >
        <Text style={textStyle}>×</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CancelButton;

CancelButton.defaultProps = {
  labelColor: 'white',
  buttonColor: 'grey',
};

CancelButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  labelColor: PropTypes.string,
  buttonColor: PropTypes.string,
};
