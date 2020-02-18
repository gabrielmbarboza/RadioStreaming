import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SoundPlayer from 'react-native-sound-player'


export default class App extends Component {
  constructor(props) {
    try {
      // or play from url
      SoundPlayer.playUrl('https://servidor32-4.brlogic.com:8130/live')
  } catch (e) {
      console.log(`cannot play the sound file`, e)
  }
  }
  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}