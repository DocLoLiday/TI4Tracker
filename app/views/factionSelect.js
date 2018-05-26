import React from 'react';
import {
    AsyncStorage,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableHighlight,
    ScrollView,
    View
} from 'react-native';

import FactionButton from '../components/factionButton';
import TechList from '../definitions/collections/techList';

import _ from 'lodash';

class FactionSelection extends React.Component {
    constructor (props) {
        super(props);
    }
    render = () => {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/backgrounds/bluespace.jpg')}>
                <View style={styles.title}>
                    <View style={styles.titlecontainer}>
                        <Text style={styles.text}>Choose a faction</Text>
                    </View>
                </View>
                <View style={{flex: 5}}>
                    <ScrollView contentContainerStyle={styles.factionContainer}>
                        <FactionButton name="Arborec" backgroundColor="green" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Letnev" backgroundColor="black" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Saar" backgroundColor="orange" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Muatt" backgroundColor="red" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Hacan" backgroundColor="yellow" textColor="black" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Creuss" backgroundColor="blue" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="L1z1x" backgroundColor="red" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Mentak" backgroundColor="yellow" textColor="black" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Naalu" backgroundColor="green" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Nekro" backgroundColor="black" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="SardakkNorr" backgroundColor="red" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Sol" backgroundColor="yellow" textColor="black" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="JolNar" backgroundColor="blue" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Winnu" backgroundColor="purple" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Xxcha" backgroundColor="orange" textColor="black" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Yin" backgroundColor="purple" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                        <FactionButton name="Yssaril" backgroundColor="green" textColor="white" onPress={this.setFaction} navigation={this.props.navigation}></FactionButton>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }

    setFaction = (faction) => {
        var startingTech = [];
        var availableTech = [];

        faction.StartingTech.forEach((tech) => {
            startingTech.push(TechList.get(tech));
        });
        
        TechList.TechArray.forEach((tech) => {
            if(faction.ExcludeTech.indexOf(tech.Name) === -1 && 
                (
                    (faction.StartingTech.indexOf(tech.Name) === -1 && !tech.Faction) || faction.FactionTech.indexOf(tech.Name) !== -1
                )
            ) {
                availableTech.push(tech);
            }
                
        });
        AsyncStorage.multiSet([["tech_owned", JSON.stringify(startingTech)], ["tech_available", JSON.stringify(availableTech)], ["faction", JSON.stringify(faction)]], () => {
            this.goToHome();
        });
    }

    goToHome = () => {
        this.props.navigation.navigate('Home');
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
        backgroundColor: "black"
    },
    text: {
        color: "white",
        fontSize: 24,
        padding: 15
    },
    factionContainer: {
        alignItems: "flex-start"
    }
});

module.exports = FactionSelection;
