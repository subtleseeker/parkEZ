import React, {Component} from 'react';
import {View, Text, Alert, TextInput, Image, TouchableHighlight, Platform, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { Button, Icon } from 'react-native-elements';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';


const CustButton = (props) => <Button 
							titleStyle={styles.buttonTitle} 
							buttonStyle={styles.buttonStyle} 
							{...props} />;

export default class Home extends Component {
	
	//Bottom NavBar
	tabs = [
		{
		  key: 'games',
		  icon: 'gamepad-variant',
		  label: 'Home',
		  barColor: '#388E3C',
		  pressColor: 'rgba(255, 255, 255, 0.16)'
		},
		{
		  key: 'movies-tv',
		  icon: 'movie',
		  label: 'Wallet',
		  barColor: '#B71C1C',
		  pressColor: 'rgba(255, 255, 255, 0.16)'
		},
		{
		  key: 'music',
		  icon: 'history',
		  type: 'font-awesome',
		  label: 'History',
		  barColor: '#E64A19',
		  pressColor: 'rgba(255, 255, 255, 0.16)'
		}
	]
	
	renderIcon = icon => ({ isActive }) => (
	<Icon size={24} color="white" name={icon} />
	)

	renderTab = ({ tab, isActive }) => (
	<FullTab
		isActive={isActive}
		key={tab.key}
		label={tab.label}
		renderIcon={this.renderIcon(tab.icon)}
	/>
	)

	//Buttons
	linkWallet = () => {
		Alert.alert("hoow");
	}

	parkCar = () => {
		Alert.alert("wooh");
	}

	parkBike = () => {
		Alert.alert("yooh");
	}

	history = () => {
		Alert.alert("oo yeaa");
	}

	render() {

		const {navigation} = this.props;
		const name = navigation.getParam('name', 'user');
		const email = navigation.getParam('email', '');

		return (
			Alert.alert(name+":"+email),
			<View style={{flex:1}}>
				<View style={styles.topContainer}>
					<View style={[styles.buttonContainer, {width: '50%'}]}>
						<CustButton 
							//buttonStyle={styles.buttonStyle}
							onPress={this.linkWallet}
							title="Link wallet"
						/>
					</View>
				</View>
				
				<View  style={styles.bottomContainer}>
					<View 
						style={[styles.buttonContainer,
								{flexDirection: 'row',
								width: '100%',
								justifyContent: 'space-evenly'}]}>
						<CustButton
							//buttonStyle={styles.buttonStyle}
							onPress={this.parkCar}
							title="Park your Car"
						/>
						<CustButton
							//buttonStyle={styles.buttonStyle}
							onPress={this.parkBike}
							title="Park your Bike"
						/>
					</View>

					<View style={styles.buttonContainer}>
						<CustButton
							title="Parking History"
							//borderRadius='15'
							//buttonStyle={styles.buttonStyle}
							onPress={this.history}
							//titleStyle={styles.buttonTitle}
						/>
					</View>
							{/* <Text style={{fontFamily:'Charmonman-Regular'}}>blabla albla</Text> */}
				</View>
				
				<BottomNavigation
					onTabPress={newTab => this.setState({ activeTab: newTab.key })}
					renderTab={this.renderTab}
					tabs={this.tabs}
				/>

			</View>
			)
		}
	}
	
const styles = StyleSheet.create({
	topContainer:{
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 1,
	},
	bottomContainer:{
		flex: 2,
		//backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer:{
		//backgroundColor: 'green',
		margin: 15,
		padding: 5,
		//marginHorizontal: 15,
		//width: '50%',
	},
	buttonStyle: {
		borderRadius:5,
		backgroundColor: '#3366cc',
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

