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
import ActionTypes from '../../definitions/actionTypes';

import _ from 'lodash';

class Attack extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            objectivesPossible: [],
            objectivesScored: [],
            actionsOwned: [],

            helpfulActions: [],
            helpfulTech: [],
            scorableObjectives: []
        };
    }
    componentDidMount = () => {
        var ref = this;
        AsyncStorage.multiGet(["objectives_possible", "objectives_scored", "tech_owned", "actions_owned"], (err, value) => {
            var data = _.fromPairs(value);
            var techOwned = JSON.parse(data["tech_owned"]);
            var objectivesPossible = JSON.parse(data["objectives_possible"]);
            var actionsOwned = JSON.parse(data["actions_owned"]);
            var objectivesScored = JSON.parse(data["objectives_scored"]);

            if (!techOwned)
                techOwned = [];
            if (!objectivesPossible)
                objectivesPossible = [];
            if (!actionsOwned)
                actionsOwned = [];
            if (!objectivesScored)
                objectivesScored = [];

            var helpfulTech = [];
            techOwned.forEach((tech) => {
                var techText = "";
                tech.Abilities.forEach((ability) => {
                    if (ability.ActionTypes.indexOf(ActionTypes.Move.value) !== -1 || ability.ActionTypes.indexOf(ActionTypes.Attack.value))
                        techText += ability.Text + " ";
                });
                if (techText) {
                    tech.Text = techText;
                    helpfulTech.push(tech);
                }
            });
            var scorableObjectives = [];
            objectivesPossible.forEach((objective) => {
                if (objective.ActionTypes.indexOf(ActionTypes.Attack.value))
                    scorableObjectives.push(objective);
            });
            var helpfulActions = [];
            actionsOwned.forEach((action) => {
                if (action.ActionTypes.indexOf(ActionTypes.Attack.value))
                    helpfulActions.push(action);
            });

            helpfulTech = helpfulTech.sort(ref.orderByProperty('Type', 'Name'));
            scorableObjectives = scorableObjectives.sort(ref.orderByProperty('Type', 'Name'));
            actionsOwned = actionsOwned.sort(ref.orderByProperty('Name'));

            this.setState({
                //Attack Specific
                helpfulTech: helpfulTech,
                helpfulActions: helpfulActions,
                scorableObjectives: scorableObjectives,
                //We will update these as obj scored, actions used
                objectivesScored: objectivesScored,
                objectivesPossible: objectivesPossible,
                actionsOwned: actionsOwned
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
                    <Text style={styles.text}>Helpful When Attacking {this.state.score}</Text>
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
        return (null);
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
        this.props.navigation.navigate(screen);
    }

    setStorage = () => {
        AsyncStorage.multiSet([["objectives_possible", JSON.stringify(this.state.objectivesPossible)], ["objectives_scored", JSON.stringify(this.state.objectivesScored)], ["actions_owned", JSON.stringify(this.state.actionsOwned)]]);
    }

    orderByProperty = (prop) => {
        var ref = this;
        var args = Array.prototype.slice.call(arguments, 1);
        return function (a, b) {
            var equality = a[prop] - b[prop];
            if (equality === 0 && arguments.length > 1) {
                return ref.orderByProperty.apply(null, args)(a, b);
            }
            return equality;
        };
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

module.exports = Attack;
