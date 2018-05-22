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

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/backgrounds/hexagon.jpg')}>
                <TouchableHighlight
                    onPress={this.props.onPress}
                    style={styles.button}>
                    <Text style={styles.text}>
                        {this.props.children}
                    </Text>
                </TouchableHighlight>
            </ImageBackground>
            // <View style={styles.container}>
            //     <View style={styles.hexagon}>
            //         <View style={styles.hexagonInner} />
            //         <View style={styles.hexagonBefore} />
            //         <View style={styles.hexagonAfter} />
            //     </View>
            // </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1
    },
    hexagon: {
        width: 180,
        height: 100
    },
    hexagonInner: {
        width: 180,
        height: 100,
        backgroundColor: 'blue',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderLeftColor: "#00b9ff",
        borderRightColor: "#00b9ff"
    },
    hexagonAfter: {
        position: 'absolute',
        bottom: -50,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 90,
        borderLeftColor: 'transparent',
        borderRightWidth: 90,
        borderRightColor: 'transparent',
        borderTopWidth: 50,
        borderTopColor: 'blue'
    },
    hexagonBefore: {
        position: 'absolute',
        top: -50,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 90,
        borderLeftColor: 'transparent',
        borderRightWidth: 90,
        borderRightColor: 'transparent',
        borderBottomWidth: 50,
        borderBottomColor: 'blue',
    }
});

module.exports = ActionButton;

ActionButton.propTypes = {
    onPress: PropTypes.func
}