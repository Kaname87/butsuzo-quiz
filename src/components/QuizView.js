import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
});

const QuizView = ({
  children,
}) => (
  <View style={styles.container}>
    {children}
  </View>
);
export default QuizView;

QuizView.propTypes = {
  children: PropTypes.node.isRequired,
};
