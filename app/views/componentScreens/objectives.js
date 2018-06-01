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

import _ from 'lodash';

class Objectives extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            objectivesPossible: [],
            objectivesScored: [],
            score: 0
        }
    }
    componentDidMount = () => {
        var ref = this;
        AsyncStorage.multiGet(["objectives_possible", "objectives_scored"], (err, value) => {
            var data = _.fromPairs(value);
            var objectivesScored = JSON.parse(data["objectives_scored"]);
            var objectivesPossible = JSON.parse(data["objectives_possible"]);

            if(!objectivesScored)
                objectivesScored = [];

            if(!objectivesPossible)
                objectivesPossible = [];

            objectivesScored = objectivesScored.sort(ref.orderByProperty('Type', 'Name'));
            objectivesPossible = objectivesPossible.sort(ref.orderByProperty('Type', 'Name'));

            var score = 0;
            objectivesScored.forEach((objective) => {
                score += objective.Points;
            });
            this.setState({
                objectivesPossible: objectivesPossible,
                objectivesScored: objectivesScored,
                score: score
            })
        });
    }

    componentWillUnmount = () => {
        this.setStorage();
    }

    render = () => {
        //Dangerous! Can cause infinite loop. Need to find a better way.
        var ref = this;
        var passedObjective = this.props.navigation.state.params;
        if(passedObjective){
            var objectivesPossible = this.state.objectivesPossible;
            objectivesPossible.push(passedObjective);
            objectivesPossible = objectivesPossible.sort(ref.orderByProperty('Type', 'Name'));
            this.props.navigation.state.params = null;
            this.setState({
                objectivesPossible: objectivesPossible
            });
        }

        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/backgrounds/bluespace.jpg')}>
                <View style={styles.topContainer}>
                    <Text style={styles.text}>Score: {this.state.score}</Text>
                    <TouchableHighlight onPress={this.goToAddObj}>
                        <Text style={styles.text}>Add Objectives +</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView>
                        <View style={styles.titleContainer}>
                            <Text style={styles.text}>Secret</Text>
                        </View>
                        {this.renderObjectiveList(ObjectiveTypes.Secret, passedObjective)}
                        <View style={styles.titleContainer}>
                            <Text style={styles.text}>Public I</Text>
                        </View>
                        {this.renderObjectiveList(ObjectiveTypes.Public1, passedObjective)}
                        <View style={styles.titleContainer}>
                            <Text style={styles.text}>Public II</Text>
                        </View>
                        {this.renderObjectiveList(ObjectiveTypes.Public2, passedObjective)}
                        <View style={styles.titleContainer}>
                            <Text style={styles.text}>Scored</Text>
                        </View>
                        {this.renderObjectiveList("Scored")}
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }

    renderObjectiveList = (type, passedObjective) => {
        var ref = this;
        if (type !== "Scored") {
            return this.state.objectivesPossible.map((objective) => {
                if (objective.Type === type)
                    return (
                        <View key={objective.Name}>
                            <ObjectiveButton objective={objective} onPress={ref.scoreObjective} onCancel={ref.removeObjective}>
                            </ObjectiveButton>
                        </View>
                    );
            });
        } else {
            return this.state.objectivesScored.map((objective) => {
                return (
                    <View key={objective.Name}>
                        <ObjectiveButton objective={objective} onPress={ref.unScoreObjective} onCancel={ref.removeObjective}>
                        </ObjectiveButton>
                    </View>
                );
            });
        }
        return objectiveViews;
    }

    scoreObjective = (objective) => {
        var objectivesPossible = this.state.objectivesPossible.filter((possibleObjective)=>{
            return possibleObjective.Name !== objective.Name;
        });
        var objectivesScored = this.state.objectivesScored;
        objectivesScored.push(objective);

        objectivesPossible = objectivesPossible.sort(this.orderByProperty('Type'));
        objectivesScored = objectivesScored.sort(this.orderByProperty('Type'));
        var score = this.state.score;
        score += objective.Points;
        this.setState({
            objectivesPossible: objectivesPossible,
            objectivesScored: objectivesScored,
            score: score
        })
    }

    unScoreObjective = (objective) => {
        var objectivesScored = this.state.objectivesScored.filter((scoredObjective)=>{
            return scoredObjective.Name !== objective.Name;
        });
        var objectivesPossible = this.state.objectivesPossible;
        objectivesPossible.push(objective);

        objectivesPossible = objectivesPossible.sort(this.orderByProperty('Type'));
        objectivesScored = objectivesScored.sort(this.orderByProperty('Type'));
        var score = this.state.score;
        score -= objective.Points;
        this.setState({
            objectivesPossible: objectivesPossible,
            objectivesScored: objectivesScored,
            score: score
        })
    }

    removeObjective = (objective) => {
        var scored = this.state.objectivesScored.filter((scoredObjective)=>{
            return scoredObjective.Name === objective.Name;
        }).length > 0;

        var objectivesScored = this.state.objectivesScored.filter((scoredObjective)=>{
            return scoredObjective.Name !== objective.Name;
        });
        var objectivesPossible = this.state.objectivesPossible.filter((possibleObjective)=>{
            return possibleObjective.Name !== objective.Name;
        });

        objectivesPossible = objectivesPossible.sort(this.orderByProperty('Type'));
        objectivesScored = objectivesScored.sort(this.orderByProperty('Type'));

        var score = this.state.score;
        if(scored)
            score -= objective.Points;

        this.setState({
            objectivesPossible: objectivesPossible,
            objectivesScored: objectivesScored,
            score: score
        })
    }

    setStorage = () => {
        AsyncStorage.multiSet([["objectives_possible", JSON.stringify(this.state.objectivesPossible)], ["objectives_scored", JSON.stringify(this.state.objectivesScored)]]);
    }


    goToAddObj = () => {
        this.setStorage();
        this.props.navigation.navigate('AvailableObjectives');
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

module.exports = Objectives;
