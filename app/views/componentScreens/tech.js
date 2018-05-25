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

import TechButton from '../../components/techButton';
import TechTypes from '../../definitions/techTypes';

import _ from 'lodash';

class Tech extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            techOwned: [],
            techAvailable: [],
            bioticCount: 0,
            propulsionCount: 0,
            warfareCount: 0,
            cyberneticCount: 0
        }
    }
    componentDidMount = () => {
        var ref = this;
        AsyncStorage.multiGet(["tech_owned", "tech_available"], (err, value) => {
            var data = _.fromPairs(value);
            var techOwned = JSON.parse(data["tech_owned"]);
            var techAvailable = JSON.parse(data["tech_available"]); 
            var bioticCount = 0;
            var propulsionCount = 0;
            var warfareCount = 0;
            var cyberneticCount = 0;
            techOwned.forEach((tech) => {
                switch(tech.Type){
                    case TechTypes.Biotic:
                        bioticCount += 1;
                        break;
                    case TechTypes.Cybernetic:
                        cyberneticCount += 1;
                        break;
                    case TechTypes.Propulsion:
                        propulsionCount += 1;
                        break;
                    case TechTypes.Warfare:
                        warfareCount += 1;
                        break;
                }
            });
            ref.setState({
                techOwned: techOwned,
                techAvailable: techAvailable,
                bioticCount: bioticCount,
                cyberneticCount: cyberneticCount,
                propulsionCount: propulsionCount,
                warfareCount: warfareCount
            });
        });
    }
    render = () => {
        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/backgrounds/bluespace.jpg')}>
                <ScrollView style={styles.container}>
                    <View style={styles.title}>
                        <View style={styles.titlecontainer}>
                            <Text style={styles.text}>Affordable Tech</Text>
                        </View>
                    </View>
                    {this.renderTechList("Affordable")}
                    <View style={styles.title}>
                        <View style={styles.titlecontainer}>
                            <Text style={styles.text}>Further Tech</Text>
                        </View>
                    </View>
                    {this.renderTechList("Further")}
                    <View style={styles.title}>
                        <View style={styles.titlecontainer}>
                            <Text style={styles.text}>Owned Tech</Text>
                        </View>
                    </View>
                    {this.renderTechList("Owned")}
                </ScrollView>
            </ImageBackground>
        );
    }

    renderTechList = (type) => {
        var techViews = [];
        switch(type) {
            case "Affordable":
                techViews = this.getAvailableTech(true);
                break;
            case "Further":
                techViews = this.getAvailableTech(false);
                break;
            case "Owned":
                techViews = this.state.techOwned.map((tech) => {
                    return (
                        <TechButton key={tech.Name} tech={tech}>
                        </TechButton>
                    );
                });;
                break;
        }
        return techViews;
    }

    getAvailableTech = (getAffordable) => {
        var ref = this;
        var availableTech = [];
        this.state.techAvailable.forEach((tech) => {
            var affordable = true;
            tech.Prereqs.forEach((prereq) => {
                switch(prereq.Type){
                    case TechTypes.Biotic:
                        if(prereq.Quantity > ref.state.bioticCount)
                            affordable = false;
                        break;
                    case TechTypes.Cybernetic:
                        if(prereq.Quantity > ref.state.cyberneticCount)
                            affordable = false;
                        break;
                    case TechTypes.Propulsion:
                        if(prereq.Quantity > ref.state.propulsionCount)
                            affordable = false;
                        break;
                    case TechTypes.Warfare:
                        if(prereq.Quantity > ref.state.warfareCount)
                            affordable = false;
                        break;
                }
            });

            if(getAffordable && affordable)
                availableTech.push(tech);
            else if(!getAffordable && !affordable)
                availableTech.push(tech);
        });

        return availableTech.map((tech) => {
            return (
                <TechButton key={tech.Name} tech={tech}>
                </TechButton>
            );
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        flex: 1,
        justifyContent: "center"
    },
    titlecontainer: {
        marginBottom: 25,
        backgroundColor: "navy"
    },
    text: {
        color: "white",
        fontSize: 24,
        padding: 15
    },
});

module.exports = Tech;
