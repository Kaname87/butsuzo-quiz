import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  // Animated,
  // Easing,
  View,
  // ViewPropTypes,
} from 'react-native';

// const INDETERMINATE_WIDTH_FACTOR = 0.3;
// const BAR_WIDTH_ZERO_POSITION = INDETERMINATE_WIDTH_FACTOR / (1 + INDETERMINATE_WIDTH_FACTOR);

// const RNViewPropTypes = ViewPropTypes || View.propTypes;

export default class ProgressBar extends Component {
  // // static propTypes = {
  // //   animated: PropTypes.bool,
  // //   borderColor: PropTypes.string,
  // //   borderRadius: PropTypes.number,
  // //   borderWidth: PropTypes.number,
  // //   children: PropTypes.node,
  // //   color: PropTypes.string,
  // //   height: PropTypes.number,
  // //   indeterminate: PropTypes.bool,
  // //   onLayout: PropTypes.func,
  // //   progress: PropTypes.number,
  // //   style: RNViewPropTypes.style,
  // //   unfilledColor: PropTypes.string,
  // //   width: PropTypes.number,
  // //   useNativeDriver: PropTypes.bool,
  // //   // eslint-disable-next-line react/forbid-prop-types
  // //   animationConfig: PropTypes.object.isRequired,
  // //   animationType: PropTypes.oneOf(['decay', 'timing', 'spring']),
  // // };
  // // 
  // static defaultProps = {
  //   animated: true,
  //   borderRadius: 4,
  //   borderWidth: 1,
  //   //color: 'rgba(0, 122, 255, 1)',
  //   color: 'grey',
  //   height: 6,
  //   indeterminate: false,
  //   progress: 0,
  //   // flex:1,
  //   useNativeDriver: false,
  //   animationConfig: { bounciness: 0 },
  //   animationType: 'spring',
  // };
  // 
  // constructor(props) {
  //   super(props);
  //   const progress = 0.5;Math.min(Math.max(props.progress, 0), 1);
  //   this.state = {
  //     width: 0,
  //     progress: new Animated.Value(props.indeterminate ? INDETERMINATE_WIDTH_FACTOR : progress),
  //     animationValue: new Animated.Value(BAR_WIDTH_ZERO_POSITION),
  //   };
  // }
  // 
  // componentDidMount() {
  //   if (this.props.indeterminate) {
  //     this.animate();
  //   }
  // }
  // 
  // componentWillReceiveProps(props) {
  //   if (props.indeterminate !== this.props.indeterminate) {
  //     if (props.indeterminate) {
  //       this.animate();
  //     } else {
  //       Animated.spring(this.state.animationValue, {
  //         toValue: BAR_WIDTH_ZERO_POSITION,
  //         useNativeDriver: props.useNativeDriver,
  //       }).start();
  //     }
  //   }
  //   if (
  //     props.indeterminate !== this.props.indeterminate ||
  //     props.progress !== this.props.progress
  //   ) {
  //     const progress = (props.indeterminate
  //       ? INDETERMINATE_WIDTH_FACTOR
  //       : Math.min(Math.max(props.progress, 0), 1)
  //     );
  // 
  //     if (props.animated) {
  //       const { animationType, animationConfig } = this.props;
  //       Animated[animationType](this.state.progress, {
  //         ...animationConfig,
  //         toValue: progress,
  //         useNativeDriver: props.useNativeDriver,
  //       }).start();
  //     } else {
  //       this.state.progress.setValue(progress);
  //     }
  //   }
  // }
  // 
  // animate() {
  //   this.state.animationValue.setValue(0);
  //   Animated.timing(this.state.animationValue, {
  //     toValue: 1,
  //     duration: 1000,
  //     easing: Easing.linear,
  //     isInteraction: false,
  //     useNativeDriver: this.props.useNativeDriver,
  //   }).start((endState) => {
  //     if (endState.finished) {
  //       this.animate();
  //     }
  //   });
  // }
  // 
  // handleLayout = (event) => {
  //   if (!this.props.width) {
  //     this.setState({ width: event.nativeEvent.layout.width });
  //   }
  //   if (this.props.onLayout) {
  //     this.props.onLayout(event);
  //   }
  // };

  render() {
    const progress = 33;
    return ( 
      
      <View style={stylesss.container} >
       <View style={stylesss.progressBar} />
       <View style={[stylesss.progressBarLeft, {flex:progress}]} />
      <View style={[stylesss.progressBarRight, {flex:100 - progress}]} />
     </View>
   );

  }
}

// {
//   // flex: 1,
//   width: 200 * p, 
//   backgroundColor: 'powderblue',
// }
const stylesss = {
  container: {
     // flex: 1,
     // flexDirection:'row',
     // // justifyContent: 'flex-start',
     // alignItems: 'flex-start',
     // borderRadius: 4,
     // // flexWrap: 'nowrap',
     // alignitems: 'stretch',
     // borderWidth: 1,
     
     flex: 0.3,
     flexDirection: 'row',
     borderWidth: 1,
     borderRadius: 10,
  },
  progressBar: {
     overflow: 'hidden',
     height: 6,
     // borderRadius: 10,
     
     // borderColor: '#D50000',
     // borderRadius: 10,
  },
  progressBarLeft: {
    backgroundColor: 'orange',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  progressBarRight: {
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }
}
// flexBox: {
//        flex: 1,
//        flexDirection: 'row',
//    },
//    progressBar: {
//        overflow: 'hidden',
//        height: 14,
//        borderWidth: 1,
//        borderColor: '#D50000',
//        borderRadius: 10,
//    },
//    progressBar_left: {
//        backgroundColor: '#D50000',
//    },
//    progressBar_right: {
//        backgroundColor: '#fff'
//    }
// 
// 
// return (
//   <View 
//     style={containerStyle}
//   >
//     <Animated.View style={progressStyle} />
//   </View>
// );