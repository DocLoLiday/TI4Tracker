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

import ObjectiveButton from '../../components/objectiveButton';
import ObjectiveTypes from '../../definitions/objectiveTypes';
import TechButton from '../../components/techButton';
import TechTypes from '../../definitions/techTypes';
import ActionButton from '../../components/actionButton';
import ActionTypes from '../../definitions/actionTypes';

import _ from 'lodash';

class Defend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            objectivesPossible: [],
            objectivesScored: [],

            actionsAvailable: [],
            actionsOwned: [],

            helpfulActions: [],
            helpfulTech: [],
            scorableObjectives: []
        };
    }
    componentDidMount = () => {
        var ref = this;
        AsyncStorage.multiGet(["objectives_possible", "objectives_scored", "tech_owned", "actions_owned", "actions_available"], (err, value) => {
            var data = _.fromPairs(value);
            var techOwned = JSON.parse(data["tech_owned"]);
            var objectivesPossible = JSON.parse(data["objectives_possible"]);
            var actionsOwned = JSON.parse(data["actions_owned"]);
            var actionsAvailable = JSON.parse(data["actions_available"]);
            var objectivesScored = JSON.parse(data["objectives_scored"]);

            if (!techOwned)
                techOwned = [];
            if (!objectivesPossible)
                objectivesPossible = [];
            if (!actionsOwned)
                actionsOwned = [];
            if (!actionsAvailable)
                actionsAvailable = [];
            if (!objectivesScored)
                objectivesScored = [];

            var helpfulTech = [];
            techOwned.forEach((tech) => {
                var techText = "";
                tech.Abilities.forEach((ability) => {
                    if (ability.ActionTypes.indexOf(ActionTypes.Defend) !== -1)
                        techText += ability.Text + " ";
                });
                if (techText) {
                    tech.Text = techText;
                    helpfulTech.push(tech);
                }
            });
            var scorableObjectives = [];
            objectivesPossible.forEach((objective) => {
                if (objective.ActionTypes.indexOf(ActionTypes.Defend) !== -1)
                    scorableObjectives.push(objective);
            });
            var helpfulActions = [];
            actionsOwned.forEach((action) => {
                if (action.ActionTypes.indexOf(ActionTypes.Defend) !== -1)
                    helpfulActions.push(action);
            });

            helpfulTech = _.sortBy((_.sortBy(helpfulTech, 'Name')), 'Type');
            scorableObjectives = _.sortBy((_.sortBy(scorableObjectives, 'Name')), 'Type');
            helpfulActions = _.sortBy(helpfulActions, 'Name');

            this.setState({
                //Attack Specific
                helpfulTech: helpfulTech,
                helpfulActions: helpfulActions,
                scorableObjectives: scorableObjectives,
                //We will update these as obj scored, actions used
                objectivesScored: objectivesScored,
                objectivesPossible: objectivesPossible,
                actionsOwned: actionsOwned,
                actionsAvailable: actionsAvailable
            });
        });
    }

    componentWillUnmount = () => {
        this.setStorage();
    }

    render = () => {
        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/backgrounds/bluespace.jpg')}>
                <View style={styles.topContainer}>
                    <Text style={styles.text}>Helpful When Defending {this.state.score}</Text>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView>
                        <View style={styles.titleContainer}>
                            <TouchableHighlight onPress={() => this.goToScreen("Objectives")}>
                                <Text style={styles.text}>Objectives</Text>
                            </TouchableHighlight>
                        </View>
                        {this.renderObjectiveList()}
                        <View style={styles.titleContainer}>
                            <TouchableHighlight onPress={() => this.goToScreen("Tech")}>
                                <Text style={styles.text}>Tech</Text>
                            </TouchableHighlight>
                        </View>
                        {this.renderTechList()}
                        <View style={styles.titleContainer}>
                            <TouchableHighlight onPress={() => this.goToScreen("Actions")}>
                                <Text style={styles.text}>Action Cards</Text>
                            </TouchableHighlight>
                        </View>
                        {this.renderActionList()}
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }

    renderObjectiveList = () => {
        var ref = this;
        return this.state.scorableObjectives.map((objective) => {
            return (
                <View key={objective.Name}>
                    <ObjectiveButton objective={objective} onPress={ref.scoreObjective}>
                    </ObjectiveButton>
                </View>
            );
        });
    }

    renderTechList = () => {
        var ref = this;
        return this.state.helpfulTech.map((tech) => {
            return (
                <View key={tech.Name}>
                    <TechButton tech={tech} text={tech.Text}>
                    </TechButton>
                </View>
            );
        });
    }

    renderActionList = () => {
        var ref = this;
        return this.state.helpfulActions.map((action) => {
            return (
                <View key={action.Name}>
                    <ActionButton action={action} onPress={ref.discardAction}>
                    </ActionButton>
                </View>
            );
        });
    }

    discardAction = (action) => {
        var actionsOwned = this.state.actionsOwned.filter((ownedAction) => {
            return ownedAction.Name !== action.Name;
        });
        var helpfulActions = this.state.helpfulActions.filter((helpfulAction) => {
            return helpfulAction.Name !== action.Name;
        });
        var actionsAvailable = this.state.actionsAvailable;
        actionsAvailable.push(action);
        
        this.setState({
            actionsOwned: actionsOwned,
            actionsAvailable: actionsAvailable,
            helpfulActions: helpfulActions
        })
    }


    scoreObjective = (objective) => {
        var scorableObjectives = this.state.scorableObjectives.filter((scorableObjective) => {
            return scorableObjective.Name !== objective.Name;
        });

        var objectivesScored = this.state.objectivesScored;
        objectivesScored.push(objective);

        var objectivesPossible = this.state.objectivesPossible.filter((objectivePossible) => {
            return objectivePossible.Name !== objective.Name;
        });

        this.setState({
            scorableObjectives: scorableObjectives,
            objectivesScored: objectivesScored,
            objectivesPossible: objectivesPossible
        });
    }

    goToScreen = (screen) => {
        // this.setStorage();
        // this.props.navigation.navigate(screen);
    }

    setStorage = () => {
        AsyncStorage.multiSet([["objectives_possible", JSON.stringify(this.state.objectivesPossible)], ["objectives_scored", JSON.stringify(this.state.objectivesScored)], ["actions_owned", JSON.stringify(this.state.actionsOwned)], ["actions_available", JSON.stringify(this.state.actionsAvailable)]]);
    }
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        flexDirection: "row"
    },
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
        flex: 5
    }
});

module.exports = Defend;
