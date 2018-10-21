import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Register from './src/components/Register';
import ParkingCards from './src/components/ParkingCards';
import Splash from './src/components/Splash';
import QRComponent from './src/components/QRComponent';
import fetch from './src/components/fetch';
import bkend from './src/components/bkend';


import {createStackNavigator} from 'react-navigation';

const AppNavigator = createStackNavigator({
	Login: {screen: Login},
	Home: { screen: Home},
	Register: { screen: Register},
	ParkingCards: {screen: ParkingCards},
	QRComponent: {screen: QRComponent},
	fetch: {screen: fetch},
	bkend: {screen: bkend},

	// Splash: {screen: Splash},
	},
	{
		headerMode: 'none',
		headerMode: 'none',
    	navigationOptions: {
        headerVisible: false,
		}
	}
);

export default class App extends Component{
	render() {
		return (
			<AppNavigator />
		);
	}
}
