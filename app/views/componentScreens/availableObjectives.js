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
import ObjectiveList from '../../definitions/collections/objectiveList';

import _ from 'lodash';

class AvailableObjectives extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            objectivesAvailable: [],
            objectivesPossible: []
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

            var objectivesRevealed = [];
            objectivesScored.forEach((objective) => {
                objectivesRevealed.push(objective.Name);
            })
            objectivesPossible.forEach((objective) => {
                objectivesRevealed.push(objective.Name);
            })
            var objectivesAvailable = ObjectiveList.ObjectiveArray.filter(function(objective){
                return objectivesRevealed.indexOf(objective.Name) === -1;
              });

            objectivesAvailable = _.sortBy(( _.sortBy(objectivesAvailable, 'Name')), 'Type');
            ref.setState({
                objectivesAvailable: objectivesAvailable,
                objectivesPossible: objectivesPossible
            });
        });
    }

    render = () => {
        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/backgrounds/bluespace.jpg')}>
                <View style={styles.topContainer}>
                    <Text style={styles.text}>Possible Objectives</Text>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView>
                        {this.renderObjectiveList()}
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }

    renderObjectiveList = () => {
        var ref = this;
        return this.state.objectivesAvailable.map((objective) => {
            return (
                <View key={objective.Name}>
                    <ObjectiveButton key={objective.Name} objective={objective} onPress={ref.addObjective}>
                    </ObjectiveButton>
                </View>
            );
        });
    }

    addObjective = (objective) => {
        this.props.navigation.navigate('Objectives', objective);
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
        flex: 7
    }
});

module.exports = AvailableObjectives;
