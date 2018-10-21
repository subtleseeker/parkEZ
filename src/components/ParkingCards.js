import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const CustButton = (props) => <Button 
							titleStyle={styles.buttonTitle} 
							buttonStyle={styles.buttonStyle} 
							{...props} />;

class ParkingCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
	  city_name: null,
	  loc0: null,
	  loc1: null,
	  loc2: null,
	  loc3: null,

    };
  }

	componentDidMount() {

		// navigator.geolocation.requestAuthorization();

		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				error: null,
				});

				fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+this.state.latitude+','+this.state.longitude+'&radius=5000&types=parking&sensor=false&key=AIzaSyB2248iKncF0G-1xT6kd225Pbq4JLdhIrM').
				then((response) => response.json()).
				then((responseJson) => {
					console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson)) ;
					if(responseJson.results[0].name){
						this.setState({
							loc0: responseJson.results[0].name
						}); 
					}
					if(responseJson.results[1].name){
						this.setState({
							loc1: responseJson.results[1].name
						}); 
					}
					if(responseJson.results[2].name){
						this.setState({
							loc2: responseJson.results[2].name
						}); 
					}
					if(responseJson.results[3].name){
						this.setState({
							loc3: responseJson.results[3].name
						}); 
					}
					//Alert.alert(this.state.loc0+' '+this.state.loc1+' '+this.state.loc2+' '+this.state.loc3);
		});
			},
			(error) => this.setState({ error: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
		);
		
		
	}

	onPark = (x) => {
		this.props.navigation.navigate('QRComponent', x);
	}

	render() {

		const {navigation} = this.props;
		const email = navigation.getParam('email', 'sad');

		return (
			//Alert.alert(email),
			<View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Latitude: {this.state.latitude}</Text>
				<Text>Longitude: {this.state.longitude}</Text>    

				<View style={styles.buttonContainer}>
					<CustButton
						onPress={() => this.onPark({email: email})} //{name: '<get from db>', email: this.state.email}
						title={this.state.loc0}
					/>
					<CustButton
						onPress={() => this.onPark( {email: email})} //{name: '<get from db>', email: this.state.email}
						title={this.state.loc1}
					/>
					<CustButton
						onPress={() => this.onPark( {email: email})} //{name: '<get from db>', email: this.state.email}
						title={this.state.loc2}
					/>
					<CustButton
						onPress={() => this.onPark( {email: email})} //{name: '<get from db>', email: this.state.email}
						title={this.state.loc3}
					/>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	// topContainer:{
	// 	flex: 1,
	// 	//backgroundColor: 'white',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// 	elevation: 1,
	// },
	// bottomContainer:{
	// 	flex: 2,
	// 	//backgroundColor: 'blue',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// },
	buttonContainer:{
		//backgroundColor: 'green',
		margin: 15,
		padding: 5,
		//marginHorizontal: 15,
		width: '70%',
	},
	buttonStyle: {
		borderRadius:5,
		backgroundColor: '#3366cc',
		margin: 5,
		// width: 300,
		// height: 45,
		// borderColor: "transparent",
		// borderWidth: 0,
	},
	buttonTitle:{
		//fontWeight: "100",
		fontFamily: 'NotoSerif-Bold',
	}
})



export default ParkingCards;
