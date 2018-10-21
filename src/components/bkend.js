import React, { Component } from 'react'
import { Text, View, WebView, Alert, StyleSheet } from 'react-native'

export default class bkend extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          slot1: null,
          slot2: null,
          slot3: null,
          slot0: null,
        };
    }

    handlePress = async () => {
        
        fetch('https://io.adafruit.com/api/v2/Octobass/feeds', {
            //url: 'https://io.adafruit.com/api/v2/Octobass/feeds',
            headers: {
                "X-AIO-Key": "0cf2d5dbd70f4dc0bda7a4fed536052a",
                'Content-Type': 'application/json'
                }
        }).then((response) => response.json())
        .then((responseJson) => {
            //Alert.alert('yeyeyeyeyeyeyeyeyeyeyeyeyyeye');
            console.log("yeyeye"+JSON.stringify(responseJson));
        this.setState({
            slot0: responseJson[0].last_value,
            slot1: responseJson[1].last_value,
            slot2: responseJson[2].last_value,
            slot3: responseJson[3].last_value,
        }); 
    
        }).catch((error) => {
        console.error(error);
        });
    }

    // state = {
    //     url: 'https://io.adafruit.com/api/v2/Octobass/feeds',
    // };

    render() {
        return (
            this.handlePress(),
            // <WebView
            // onLoadStart={(navState) => this.setState({url: navState.nativeEvent.url})}
            // source={{
            //     uri: this.state.url,
            //     headers: {
            //     "X-AIO-Key": "0cf2d5dbd70f4dc0bda7a4fed536052a",
            //     'Content-Type': 'application/json'
            //     }
            // }}/>
            <View style={{flex:1, width:'100%',justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{this.state.slot0}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{this.state.slot1}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{this.state.slot2}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{this.state.slot3}</Text>
                </View>
            </View>
            
        );
    }
}


const styles = StyleSheet.create({
    
    textContainer:{
        width:'65%', 
        padding:15, 
        backgroundColor: '#cccccc', 
        justifyContent: 'center', 
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: 'black',
        margin: 10,
    },

    textStyle: {
        fontSize: 35,
        justifyContent: 'center',
        alignContent: 'center',
        width: "50%",
        padding: 5,
        //backgroundColor: 'green',
        margin: 5,
        textAlign: "center",
    }
})