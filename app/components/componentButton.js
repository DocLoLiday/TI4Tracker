'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

class ComponentButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/backgrounds/componentBackground.png')}>
                <TouchableHighlight
                    onPress={this.props.onPress}
                    style={styles.button}>
                    <Text style={styles.text}>
                        {this.props.children}
                    </Text>
                </TouchableHighlight>
            </ImageBackground>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        margin: 5,
        width: 95,
        height: 160
    },
    button: {
        flex: 1,
        padding: 5,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:
        {
            color: '#FFF',
            fontWeight: "bold",
            fontSize: 16
        }
});

module.exports = ComponentButton;

ComponentButton.propTypes = {
    onPress: PropTypes.func
}