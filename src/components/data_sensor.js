import React, {Component} from 'react'; 
import {Text, View, Image} from 'react-native'; 
var request = require('request');

var options = {
  url: 'https://io.adafruit.com/api/v2/Octave/feeds/parkez/data',
  headers: {
    'X-AIO-Key': 'dd9510b9e3c9429aa21140c815d21165',
    'Content-Type': 'application/json'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var feeds = JSON.parse(body);
    console.log(feeds.length + "FEEDS AVAILABLE");
    feeds.forEach(function (feed) {
      console.log(feed.name, feed.key);
    })
  }
}

request(options, callback);
