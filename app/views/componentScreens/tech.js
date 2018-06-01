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

            techAvailable = techAvailable.sort(ref.orderByProperty('Type', 'PrereqCount'));
            techOwned = techOwned.sort(ref.orderByProperty('Type', 'PrereqCount'));
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

    componentWillUnmount = () => {
        AsyncStorage.multiSet([["tech_owned", JSON.stringify(this.state.techOwned)], ["tech_available", JSON.stringify(this.state.techAvailable)]]);
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
        var ref = this;
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
                        <TechButton key={tech.Name} tech={tech} onPress={ref.removeTech} showAllText={true}>
                        </TechButton>
                    );
                });
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
                <TechButton key={tech.Name} tech={tech} onPress={getAffordable ? ref.addTech : null} showAllText={true}>
                </TechButton>
            );
        });
    }

    addTech = (tech) => {
        var techAvailable = this.state.techAvailable.filter((availTech)=>{
            return availTech.Name !== tech.Name;
        });
        var techOwned = this.state.techOwned;
        techOwned.push(tech);

        techAvailable = techAvailable.sort(this.orderByProperty('Type', 'PrereqCount'));
        techOwned = techOwned.sort(this.orderByProperty('Type', 'PrereqCount'));
        this.setState({
            techAvailable: techAvailable,
            techOwned: techOwned,
            bioticCount: tech.Type === TechTypes.Biotic ? this.state.bioticCount + 1 : this.state.bioticCount,
            cyberneticCount: tech.Type === TechTypes.Cybernetic ? this.state.cyberneticCount + 1 : this.state.cyberneticCount,
            propulsionCount: tech.Type === TechTypes.Propulsion ? this.state.propulsionCount + 1 : this.state.propulsionCount,
            warfareCount: tech.Type === TechTypes.Warfare ? this.state.warfareCount + 1 : this.state.warfareCount
        });
    }

    removeTech = (tech) => {
        var techAvailable = this.state.techAvailable;
        techAvailable.push(tech);
        var techOwned = this.state.techOwned.filter((ownedTech)=>{
            return ownedTech.Name !== tech.Name;
        });

        techAvailable = techAvailable.sort(this.orderByProperty('Type', 'PrereqCount'));
        techOwned = techOwned.sort(this.orderByProperty('Type', 'PrereqCount'));
        this.setState({
            techAvailable: techAvailable,
            techOwned: techOwned,
            bioticCount: tech.Type === TechTypes.Biotic ? this.state.bioticCount - 1 : this.state.bioticCount,
            cyberneticCount: tech.Type === TechTypes.Cybernetic ? this.state.cyberneticCount - 1 : this.state.cyberneticCount,
            propulsionCount: tech.Type === TechTypes.Propulsion ? this.state.propulsionCount - 1 : this.state.propulsionCount,
            warfareCount: tech.Type === TechTypes.Warfare ? this.state.warfareCount - 1 : this.state.warfareCount
        });
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
