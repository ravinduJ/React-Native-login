import React, { Component } from 'react';
import{
  StyleSheet,
  Text,
  View,
  Image
}from 'react-native';



export default class Logo extends Component<{}>{
    render(){
  
      return(
        <View style = {styleL.container}>
      <Image

         style={styleL.logo}
        source={require('../Img/LOGO.jpg')}
      />
      <Text style={styleL.loginTxt}>Login Page</Text>
     
    </View>
  
      );
      
    }
  };


  const styleL = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    logo:{
      width: 80,
      height: 80,
    },

    loginTxt:{
      marginVertical: 15,
      fontSize:18,
      color: 'rgba(255, 255, 255, 0.7)'
    }
  });



 