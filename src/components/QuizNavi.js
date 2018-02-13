import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
});

const QuizNavi = ({
  children,
}) => (
  <View style={styles.container}>
    {children}
  </View>
);
export default QuizNavi;

QuizNavi.propTypes = {
  children: PropTypes.node.isRequired,
};
