import React, { Component } from 'react';
import { View, Text } from 'react-native';

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      city_name: null,
    };
  }

  componentDidMount() {


    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.latitude + ',' + this.state.longitude + '&key=AIzaSyB2248iKncF0G-1xT6kd225Pbq4JLdhIrM').
    then((response) => response.json()).
    then((responseJson) => {console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
       this.setState({
         city_name :responseJson.results[0],
        }); 
    });
  }

    
    //.then(function() {
    //var city = responseJson.results[0].address_components.filter(x => x.types.filter(t => t == 'administrative_area_level_2').length > 0)[0].short_name;
    //console.log(JSON.stringify(responseJson));
    //this.setState({city_name: city});    
    //});
  //}

  render() {
    return (
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text>Latitude: {this.state.latitude}</Text>
           <Text>Longitude: {this.state.longitude}</Text>    
           <Text>City Name: {this.state.city_name} </Text>  
      </View>
    );
  }
}

export default GeolocationExample;

