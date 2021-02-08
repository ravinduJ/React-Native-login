/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import{
 
  StyleSheet,
  View,
  Text
  
}from 'react-native';

import Login from './src/Pages/Login'
import Signup from './src/Pages/Signup'



export default class App extends Component<{}>{
  render(){

    return(
      <View style={styles.container}>
        
       <Signup/> 
       {/* <Text>HEY there</Text> */}

          
      </View>

    );
    
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#455a64',
  },

  newbox:{
    backgroundColor: '#adc2cc',
  },
});

