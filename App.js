import React, { Component } from 'react';
import { Provider } from 'react-redux';
 import Quiz from './src/containers/Quiz';
 import store from './src/store';

 export default class App extends Component {
   render() {

     return (
       <Provider store={store}>
         <Quiz />
       </Provider>
     );
   }
}
