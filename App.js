import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Register from './src/components/Register';
import {createStackNavigator} from 'react-navigation';

const AppNavigator = createStackNavigator({
	Login: {screen: Login},
	Home: { screen: Home},
	Register: { screen: Register},
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
