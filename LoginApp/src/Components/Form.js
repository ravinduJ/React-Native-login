import React, { Component } from 'react';
import{
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
}from 'react-native';



export default class Form extends Component<{}>{
    render(){
  
      return(
        <View style = {stylef.container}>
      
        
      <TextInput style = {stylef.inputBox} 
      placeholder="Email" 
      placeholderTextColor = "#ffffff"/>

      <TextInput style = {stylef.inputBox} 
      secureTextEntry = {true}
      placeholder="Password" 
      placeholderTextColor = "#ffffff"/>


<TouchableOpacity
        style={stylef.loginbtn}
        // onPress={onPress}
      >
        <Text style={stylef.btntxt}>{this.props.type}</Text>
      </TouchableOpacity>
     
    </View>
  
      );
      
    }
  };


  const stylef = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },

    loginbtn: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginVertical: 10,
        borderRadius: 25,
        paddingVertical: 12,
        backgroundColor: '#1c313a'
    },

    btntxt: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }

    
  });



 