'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import TechTypes from '../definitions/techTypes';

class TechButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: "black",
            text: ""
        }
    }
    componentDidMount = () => {
        var backgroundColor = "black";
        switch (this.props.tech.Type) {
            case TechTypes.Biotic:
                backgroundColor = "green";
                break;
            case TechTypes.Cybernetic:
                backgroundColor = "yellow";
                break;
            case TechTypes.Propulsion:
                backgroundColor = "blue";
                break;
            case TechTypes.Warfare:
                backgroundColor = "red";
                break;
        }
        var text = "";
        if(this.props.showAllText) {
            this.props.tech.Abilities.forEach((ability)=>{
                text += ability.Text + " ";
            });
        } else if (this.props.text)
            text = this.props.text;
        this.setState({
            backgroundColor: backgroundColor,
            text: text
        });
    }

    render = () => {
        return (
            <View style={styles.container}>
                <View style={[{ borderTopColor: this.state.backgroundColor }, styles.trapezoid]}>
                </View>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.onPress} >
                    <View>
                        <Text style={[styles.titleText, { color: this.state.backgroundColor === "yellow" ? "black" : "white" }]}>
                            {this.props.tech.DisplayName}
                        </Text>
                        <Text style={[styles.text, { color: this.state.backgroundColor === "yellow" ? "black" : "white" }]}>
                            {this.state.text}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    onPress = () => {
        if (typeof this.props.onPress === "function")
            this.props.onPress(this.props.tech);
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

module.exports = TechButton;