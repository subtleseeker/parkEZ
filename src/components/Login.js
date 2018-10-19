import React, { Component } from 'react'
import {View, Text, Alert, Button, TextInput, Image, TouchableHighlight, Platform, StyleSheet} from 'react-native';
import { MKTextField, MKColor, mdl } from 'react-native-material-kit';
import GoogleLogin from '../../GoogleLoginButton';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Number...')
  .withStyle({
	  	height: 48,  // have to do it on iOS
		marginTop: 10,
		width: '90%'
	})
  .withTextInputStyle({flex: 1, color: 'black'})
  .withFloatingLabelFont({
    fontSize: 15,
    // fontStyle: 'italic',
    fontWeight: '200',
  })
//   .withKeyboardType('numeric')
.build();

export default class Login extends Component<Props> {
    constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			auth_token: '',

			signedIn: false,
			name: "",
			photoUrl: "",
		}
    };
    
    onRegister = () => {
		this.props.navigation.navigate('Register');
	}

	onSignin = (x) => {
		this.props.navigation.navigate('Home', x);
	}

    render() {
        return (
        <View style={styles.loginContainer}>
            <View style={styles.login}>
                <Image
                        resizeMode='contain'
                        // style={styles.logo}
                        source={require('../images/logo_park.png')}	
                />

                <TextfieldWithFloatingLabel
					//tintColor={MKColor.Lime}
					//textInputStyle={{color: MKColor.Orange}}
					onChangeText={textInputValue => this.setState({email: textInputValue})}
					placeholder="Email Id"
					// style={{marginTop: 40}}
				/>

				<TextfieldWithFloatingLabel 
                    placeholder= "Password"
                    onChangeText={textInputValue => this.setState({password: textInputValue})}
                    // style={[styles.textInput, {marginTop:10}]}	
                    // style={{marginTop: 10}}
                    secureTextEntry={true}		
				/>

                <View style={styles.buttonContainer}>
					<Button
						onPress={() => this.onSignin({name: '<get from db>', email: this.state.email})}
						title="Sign In"
					/>
				</View>

                <TouchableHighlight 
				style={{marginTop: 15, padding: 3}}
				underlayColor='#F0F0F0'
				onPress={this.onRegister}>
					<Text style={{ color: 'darkblue'}}>REGISTER</Text>
				</TouchableHighlight>

				<View style={styles.googleSignIn}>
					<GoogleLogin 
						onLogin={
							(result) => {
								console.log('Google onLogin')
								if (result.message) {
									alert('Error: ' + result.message)
								} 
								else {
									//alert("Login was successful " + result.name + " - " + result.email)
									this.onSignin( {name : result.name, email: result.email})
								}
							}
						}
						onLogout={() => alert("Logged Out")}
							onError={
							(result) => {
								if (result.error) {
								alert('Error: ' + result.error)
								} else {
								alert("Error")
								}
							}
						}
					/>
				</View>

			</View>
		</View>
		)
	}
}

const styles = StyleSheet.create({
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
		marginTop: 50,
		padding: 5,
		// backgroundColor: 'blue',
	},
	input: {
		height: 48,  // have to do it on iOS
		marginTop: 10,
	},
})
