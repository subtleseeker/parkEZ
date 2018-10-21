import React, { Component } from 'react';
import { TouchableOpacity, View, ActivityIndicator, Text, Alert} from 'react-native';


export default class App extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			id: null,
			email: null,
			credit_no: null,
			disabled: null,
			date: null,	
		};
	}


	handlePress = async () => {
	fetch('https://shielded-fjord-35395.herokuapp.com/find_user/ruchin@gmail.com', {
		method: 'GET',
		headers: {
		'Content-Type': 'application/json',
		}
	}).then((response) => response.json())
	.then((responseJson) => {
	console.log("yeyeye"+responseJson);
	this.setState({
		id: responseJson._id,
		email: responseJson.email,
		credit_no: responseJson.credit_no,
		disabled: responseJson.disabled,
		date: responseJson.Date,
	}); 

	}).catch((error) => {
	console.error(error);
	});
	}

	render(){
		return(
			this.handlePress(),
			<View style={{flex:1}}>
				<View style={{paddingTop: 50, paddingLeft: 50, justifyContent: 'center', alignContent: 'center' }}>
					<Text> Id: {this.state.id} </Text>
					<Text> Credit no.:{this.state.credit_no} </Text>
					{/* <Text> Date: {this.state.date} </Text> */}
					
					{/* <TouchableOpacity onPress={this.handlePress.bind(this)}>
					<Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me to see the name </Text>
					</TouchableOpacity> */}
				</View> 
			</View>
		);
	}
}
