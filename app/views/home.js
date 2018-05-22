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
          <ComponentButton children={"Objectives"}></ComponentButton>
          <ComponentButton children={"Actions"}></ComponentButton>
          <ComponentButton children={"Tech"}></ComponentButton>
          <ComponentButton children={"Promissory"}></ComponentButton>
        </View>
        <View style={styles.components}>
          <ActionButton children={"Attack"}></ActionButton>
          <ActionButton children={"Defend"}></ActionButton>
        </View>
        <View style={styles.components}>
          <ActionButton children={"Produce"}></ActionButton>
          <ActionButton children={"Spend"}></ActionButton>
        </View>
      </ImageBackground>
    );
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
