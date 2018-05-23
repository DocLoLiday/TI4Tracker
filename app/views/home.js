import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';


import ComponentButton from '../components/componentButton';
import ActionButton from '../components/actionButton';

class Home extends React.Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={require('../../assets/images/backgrounds/bluespace.jpg')}>
        <View style={styles.components}>
          <ComponentButton children={"Objectives"} onPress={this.goToScreen}></ComponentButton>
          <ComponentButton children={"Actions"} onPress={this.goToScreen}></ComponentButton>
          <ComponentButton children={"Tech"} onPress={this.goToScreen}></ComponentButton>
          <ComponentButton children={"Promissory"} onPress={this.goToScreen}></ComponentButton>
        </View>
        <View style={styles.components}>
          <ActionButton children={"Attack"} onPress={this.goToScreen}></ActionButton>
          <ActionButton children={"Defend"} onPress={this.goToScreen}></ActionButton>
        </View>
        <View style={styles.components}>
          <ActionButton children={"Produce"} onPress={this.goToScreen}></ActionButton>
          <ActionButton children={"Spend"} onPress={this.goToScreen}></ActionButton>
        </View>
      </ImageBackground>
    );
  }
  goToScreen(e){

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  components: {
    flex: 1,
    flexDirection: "row"
  },
  section: {
    flex: 2,
    flexDirection: "row"
  }
});

module.exports = Home;
