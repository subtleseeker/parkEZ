import React, { Component } from 'react';
import { View, Text, Image, Alert, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

const CustButton = (props) => <Button 
							titleStyle={styles.buttonTitle} 
							buttonStyle={[styles.buttonStyle,{backgroundColor: 'blue', borderRadius: 5}]} 
							{...props} />;

export default class QRComponent extends Component {

	onPs = () => {
		//Alert.alert('Hello');
		this.props.navigation.navigate('bkend');
	}

  render() {

	const {navigation} = this.props;
	const email = navigation.getParam('email', 'sorry');

    return (
		//Alert.alert(email),
      	<View style={styles.topContainer}>

				<Image 
				source={{ uri: "http://api.qrserver.com/v1/create-qr-code/?data="+email+"&size=250x250"}}
				style = {{flex:0.58}}
				>
				</Image>
				
				<View style={{marginTop: 30,color:'#3366cc'}}>
					<CustButton
								onPress={this.onPs} //{name: '<get from db>', email: this.state.email}
								title="Open Slots"
							/>
				</View>

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
	loginContainer:{
		alignItems: 'center',
		flex: 1,
		//backgroundColor:'gray',
		padding: 30,
		width: '100%',
	},
	login:{
		marginTop: 50,
		alignItems: 'center',
		//backgroundColor: 'pink',
		width: '100%',
	},
	logo:{
		position: 'absolute',
		width: 300,
		height:100,
	},
	textInput:{
		color: 'purple',
		borderBottomColor: 'lightblue',
		borderBottomWidth: 2,
		justifyContent: 'flex-start',
		width: '90%',
		marginTop: 10,
		fontSize: 20,
		//backgroundColor: 'green',
		borderRadius: 5,
	},
	buttonContainer: {
		marginTop: 20,
	},
	googleSignIn:{
		marginTop: 100,
		padding: 5,
		// backgroundColor: 'blue',
	},
	input: {
		height: 48,  // have to do it on iOS
		marginTop: 10,
	},
})
