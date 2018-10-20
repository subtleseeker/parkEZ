import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ImageBackground source={{ uri: "http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=30x30"}}
      style = {{width: '50%', height: '50%'}}>
      <Text>Hello</Text>
      </ImageBackground>  
      </View>
    );
  }
}
