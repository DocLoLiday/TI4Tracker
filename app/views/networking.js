import React from 'react';
import { ImageBackground,
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
          <TouchableHighlight style={styles.button} onPress={this.goHome}>
            <Text style={styles.text}>Proceed</Text>
          </TouchableHighlight>
      </ImageBackground>
    );
  }

  goHome = () => {
    this.props.navigation.navigate('Home')
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
    fontFamily: "juna",
    fontSize: 24,
    padding: 15
  },
  button: {
    borderRadius: 10,
    backgroundColor: "navy"
  },
  titlecontainer: {
    marginBottom: 25,
    backgroundColor: "black"
  }
});

module.exports = Networking;
