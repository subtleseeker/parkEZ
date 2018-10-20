import React, { Component } from 'react';
import { View, Text, Image, Alert, StyleSheet, ImageBackground } from 'react-native';

export default class QRComponent extends Component {
  render() {

	const {navigation} = this.props;
	const email = navigation.getParam('email', 'sorry:(');

    return (
		//Alert.alert(email),
      	<View style={styles.topContainer}>

			<Image 
			source={{ uri: "http://api.qrserver.com/v1/create-qr-code/?data="+email+"&size=250x250"}}
			style = {{flex:0.5}}
			>
			</Image>

		</View>
    );
  }
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		padding: 15
   },
})