import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  questionTextSub: {
    fontSize: 18,
    marginTop: 5,
  },
  questionTextMain: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

const Question = ({
  name,
  place,
}) => (
  <View style={styles.questionContainer}>
    <Text style={styles.questionTextMain}>{name}</Text>
    <Text style={styles.questionTextSub}>{place}</Text>
  </View>
);

export default Question;
