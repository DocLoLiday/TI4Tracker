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
  render = () => {
    return (
      <ImageBackground style={styles.container} source={require('../../assets/images/backgrounds/bluespace.jpg')}>
        <View style={styles.components}>
          <ComponentButton name={"Objectives"} onPress={this.goToScreen}></ComponentButton>
          <ComponentButton name={"Actions"} onPress={this.goToScreen}></ComponentButton>
          <ComponentButton name={"Tech"} onPress={this.goToScreen}></ComponentButton>
          <ComponentButton name={"Promissory"} onPress={this.goToScreen}></ComponentButton>
        </View>
        <View style={styles.components}>
          <ActionButton name={"Attack"} onPress={this.goToScreen}></ActionButton>
          <ActionButton name={"Defend"} onPress={this.goToScreen}></ActionButton>
        </View>
        <View style={styles.components}>
          <ActionButton name={"Produce"} onPress={this.goToScreen}></ActionButton>
          <ActionButton name={"Spend"} onPress={this.goToScreen}></ActionButton>
        </View>
      </ImageBackground>
    );
  }
  goToScreen = (screen) => {
    this.props.navigation.navigate(screen);
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
