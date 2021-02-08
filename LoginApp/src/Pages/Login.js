import React, { Component } from 'react';
import{
  StyleSheet,
  Text,
  View,
  StatusBar
}from 'react-native';

import Logo from '../Components/Logo';
import Form from '../Components/Form';

export default class Login extends Component<{}>{
    render(){
  
      return(
        <View style = {loginstyle.container}>
            <Logo/>
            <Form/>
            <View style = {loginstyle.signup}>
              <Text style = {loginstyle.signuptxt}> Not yet signed up ?</Text>
              <Text style = {loginstyle.signupbtn}> Signup here</Text>
            </View>
        </View>


  
      );
      
    }
  };

  const loginstyle = StyleSheet.create({

    container:{
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    signup:{
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection : 'row'
    },

    signuptxt: {

      color : 'rgba(255, 255, 255, 0.7)',
      fontSize :  16
      
    },

    signupbtn : {
      color : '#ffffff',
      fontSize : 16,
      fontWeight :'600'
    }

  });