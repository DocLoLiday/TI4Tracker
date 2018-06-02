'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class ActionButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: "darkred"
        }
    }
    render = () => {
        return (
            <View style={styles.row}>
                <View style={styles.container}>
                    <View style={[{ borderTopColor: this.state.backgroundColor }, styles.trapezoid]}>
                    </View>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.onPress} >
                        <View>
                            <Text style={styles.titleText}>
                                {this.props.action.Name}
                            </Text>
                            <Text style={styles.text}>
                                {this.props.action.Text}
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    onPress = () => {
        if (typeof this.props.onPress === "function")
            this.props.onPress(this.props.action);
    }
}

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        position: 'absolute',
        padding: 45
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'right'
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'right'
    },
    trapezoid: {
        width: 360,
        borderTopWidth: 75,
        borderLeftWidth: 65,
        borderLeftColor: 'transparent',
        borderStyle: 'solid',
        margin: 15
    }
});

module.exports = ActionButton;