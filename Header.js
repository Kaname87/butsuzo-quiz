import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
 } from 'react-native';
 
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>仏像四択</Text>
    </View> 
  )
 }

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    flexDirection:'row',
    justifyContent: 'center',
    height: 10,
    borderBottomWidth:1,
    alignItems:'center',
    borderColor:'rgba(0,0,0,0.1)'
  },
  header: {
    alignSelf:'center', 
    marginLeft:10, 
    color:'#444', 
    fontSize:25,
  }
});
