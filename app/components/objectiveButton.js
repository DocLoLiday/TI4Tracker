'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import ObjectiveTypes from '../definitions/objectiveTypes';

class ObjectiveButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: "black"
        }
    }
    componentDidMount = () => {
        var backgroundColor = "black";
        switch (this.props.objective.Type) {
            case ObjectiveTypes.Public1:
                backgroundColor = "orangered";
                break;
            case ObjectiveTypes.Public2:
                backgroundColor = "blue";
                break;
            case ObjectiveTypes.Secret:
                backgroundColor = "darkred";
                break;
        }

        this.setState({
            backgroundColor: backgroundColor
        });
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
                                {this.props.objective.Name}
                            </Text>
                            <Text style={styles.text}>
                                {this.props.objective.Text}
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {this.renderCancel()}
            </View>
        );
    }
    renderCancel = () => {
        if (typeof this.props.onCancel === "function")
            return (
                <TouchableHighlight style={styles.container} onPress={this.onCancel}>
                    <Text style={styles.titleText}>X</Text>
                </TouchableHighlight>
            );
    }
    onPress = () => {
        if (typeof this.props.onPress === "function")
            this.props.onPress(this.props.objective);
    }
    onCancel = () => {
        if (typeof this.props.onCancel === "function")
            this.props.onCancel(this.props.objective);
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

module.exports = ObjectiveButton;