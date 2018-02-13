import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
});

const QuizBottom = ({
  children,
}) => (
  <View style={styles.container}>
    {children}
  </View>
);
export default QuizBottom;

QuizBottom.propTypes = {
  children: PropTypes.node,
};
