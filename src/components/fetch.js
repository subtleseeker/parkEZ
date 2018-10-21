import React, { Component } from 'react';
import { TouchableOpacity, View, ActivityIndicator, Text, Alert} from 'react-native';
export default class App extends Component {
handlePress = async () => {
  fetch('https://shielded-fjord-35395.herokuapp.com/find_user/ruchin@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }}).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    }).catch((error) => {
      console.error(error);
    });
}
  render(){
  return(
   <View style={{paddingTop: 50, paddingLeft: 50 }}>
   <Text> Some other text </Text>
    <Text> Some other text </Text>
    <TouchableOpacity onPress={this.handlePress.bind(this)}>
     <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me to see the name </Text>
    </TouchableOpacity>
</View> 
  );
}
}
