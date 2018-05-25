import React from 'react';
import { 
  AsyncStorage,
  ImageBackground,
  StyleSheet, 
  Text, 
  TouchableHighlight,
  View } from 'react-native';

class Networking extends React.Component {
  render = () => {
    return (
      <ImageBackground style={styles.container} source={require('../../assets/images/backgrounds/background.jpg')}>
          <View style={styles.titlecontainer}>
            <Text style={styles.text}>Twilight Imperium Tracker</Text>
          </View>
          <TouchableHighlight style={styles.button} onPress={this.goForth}>
            <Text style={styles.text}>Proceed</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.clearStorage}>
            <Text style={styles.text}>Clear Storage</Text>
          </TouchableHighlight>
      </ImageBackground>
    );
  }

  goForth = () => {
    var ref = this;
    AsyncStorage.getItem("faction").then((value) => {
      if(!value)
        ref.props.navigation.navigate('FactionSelect');
      else
        ref.props.navigation.navigate('Home');
    })
    .catch((error) => {
      ref.props.navigation.navigate('FactionSelect');
    });
    
  }

  clearStorage = () => {
    AsyncStorage.clear();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 24,
    padding: 15
  },
  button: {
    borderRadius: 10,
    backgroundColor: "navy",
    margin: 15
  },
  titlecontainer: {
    marginBottom: 25,
    backgroundColor: "black"
  }
});

module.exports = Networking;
