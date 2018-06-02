import React from 'react';
import {
    AsyncStorage,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import ActionButton from '../../components/actionButton';
import ActionList from '../../definitions/collections/actionList';

import _ from 'lodash';

class Actions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            actionsAvailable: [],
            actionsOwned: []
        }
    }
    componentDidMount = () => {
        var ref = this;
        AsyncStorage.multiGet(["actions_available", "actions_owned"], (err, value) => {
            var data = _.fromPairs(value);
            var actionsAvailable = JSON.parse(data["actions_available"]);
            var actionsOwned = JSON.parse(data["actions_owned"]);

            if (!actionsAvailable)
                actionsAvailable = [];

            if (!actionsOwned)
                actionsOwned = [];

            if(actionsAvailable.length === 0)
                actionsAvailable = ActionList["ActionArray"];

            actionsAvailable = _.sortBy(actionsAvailable, 'Name');
            actionsOwned = _.sortBy(actionsOwned, 'Name');

            this.setState({
                actionsAvailable: actionsAvailable,
                actionsOwned: actionsOwned
            })
        });
    }

    componentWillUnmount = () => {
        this.setStorage();
    }

    render = () => {
        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/backgrounds/bluespace.jpg')}>
                <View style={styles.scrollContainer}>
                    <ScrollView>
                        <View style={styles.titleContainer}>
                            <Text style={styles.text}>Owned</Text>
                        </View>
                        {this.renderActionList("Owned")}
                        <View style={styles.titleContainer}>
                            <Text style={styles.text}>Available</Text>
                        </View>
                        {this.renderActionList("Available")}
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }

    renderActionList = (type) => {
        var ref = this;
        if (type === "Owned") {
            return this.state.actionsOwned.map((action) => {
                return (
                    <View key={action.Name}>
                        <ActionButton action={action} onPress={ref.discardAction} >
                        </ActionButton>
                    </View>
                );
            });
        } else {
            return this.state.actionsAvailable.map((action) => {
                return (
                    <View key={action.Name}>
                        <ActionButton action={action} onPress={ref.drawAction} >
                        </ActionButton>
                    </View>
                );
            });
        }
    }

    discardAction = (action) => {
        var actionsOwned = this.state.actionsOwned.filter((ownedAction) => {
            return ownedAction.Name !== action.Name;
        });
        var actionsAvailable = this.state.actionsAvailable;
        actionsAvailable.push(action);

        actionsAvailable = _.sortBy(actionsAvailable, 'Name');
        actionsOwned = _.sortBy(actionsOwned, 'Name');
        
        this.setState({
            actionsOwned: actionsOwned,
            actionsAvailable: actionsAvailable
        })
    }

    drawAction = (action) => {
        var actionsAvailable = this.state.actionsAvailable.filter((availableAction) => {
            return availableAction.Name !== action.Name;
        });
        var actionsOwned = this.state.actionsOwned;
        actionsOwned.push(action);

        actionsAvailable = _.sortBy(actionsAvailable, 'Name');
        actionsOwned = _.sortBy(actionsOwned, 'Name');
        
        this.setState({
            actionsOwned: actionsOwned,
            actionsAvailable: actionsAvailable
        })
    }

    setStorage = () => {
        AsyncStorage.multiSet([["actions_available", JSON.stringify(this.state.actionsAvailable)], ["actions_owned", JSON.stringify(this.state.actionsOwned)]]);
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        marginBottom: 25,
        backgroundColor: "navy"
    },
    text: {
        flex: 1,
        color: "white",
        fontSize: 24,
        padding: 15
    },
    scrollContainer: {
        flex: 1
    }
});

module.exports = Actions;
