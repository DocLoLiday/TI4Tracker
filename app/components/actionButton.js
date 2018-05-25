'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class ActionButton extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/backgrounds/hexagon.png')}>
                <TouchableHighlight
                    onPress={this.onPress}
                    style={styles.button}>
                    <Text style={styles.text}>
                        {this.props.name}
                    </Text>
                </TouchableHighlight>
            </ImageBackground>
        );
    }

    onPress = () => {
        this.props.onPress(this.props.name)
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 175,
        width: 175
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

module.exports = ActionButton;

ActionButton.propTypes = {
    onPress: PropTypes.func
}