'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import FactionList from '../definitions/collections/factionList';

class FactionButton extends Component {
    constructor(props) {
        super(props);

        this.faction = FactionList[this.props.name];
    }

    render = () => {
        return (
            <View style={styles.container}>
                <View style={styles.trapezoid}>
                </View>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.onPress} >
                    <Text style={[styles.text, { color: 'white' }]}>
                        {this.faction.Name}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }

    onPress = () => {
        this.props.onPress(this.faction);
    }
}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        position: 'absolute',
        padding: 45
    },
    text:
        {
            fontWeight: 'bold',
            fontSize: 22
        },
    trapezoid: {
        width: 360,
        borderTopWidth: 75,
        borderTopColor: 'navy',
        borderLeftWidth: 65,
        borderLeftColor: 'transparent',
        borderStyle: 'solid',
        margin: 15
    }
});

module.exports = FactionButton;