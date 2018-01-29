import React, { Component } from 'react';
import {
  View,
} from 'react-native';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: this._calcProgress(this.props.isFinished,  this.props.currentQuestionNumber, this.props.lastQuestionNumber),
    }

    this._calcProgress = this._calcProgress.bind(this);
  }
  
  _calcProgress(isFinished, currentQuestionNumber, lastQuestionNumber) {
    return isFinished ? 100 : ((currentQuestionNumber -1) / lastQuestionNumber) * 100;
  }
  
  componentWillReceiveProps(props) {
    this.setState({
      progress: this._calcProgress(props.isFinished, props.currentQuestionNumber, props.lastQuestionNumber),
    });
  }

  render() {
    return ( 
      <View style={styles.container} >
        <View style={styles.progressBar} />
         <View style={[styles.progressBarLeft, {flex:this.state.progress}]} />
        <View style={[styles.progressBarRight, {flex:100 - this.state.progress}]} />
       </View>
   );
  }
}

const styles = {
  container: {     
     flex: 0.3,
     flexDirection: 'row',
     borderWidth: 1,
     borderRadius: 10,
  },
  progressBar: {
     overflow: 'hidden',
     height: 6,
  },
  progressBarLeft: {
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  progressBarRight: {
    backgroundColor: 'white',
    borderRadius: 10,
  }
}
