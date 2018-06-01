'use strict';
import React, { Component } from 'react';
import ReactNative, {
    AsyncStorage
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

import Networking from '../views/networking';
import FactionSelect from '../views/factionSelect';
import Home from '../views/home';
import Tech from '../views/componentScreens/tech';
import Objectives from '../views/componentScreens/objectives';
import AvailableObjectives from '../views/componentScreens/availableObjectives';
import Attack from '../views/actionScreens/attack';
// import Defend from '../views/actionScreens/defend';
// import Actions from '../views/componentScreens/actions';

const Navigator = StackNavigator({
    Networking: { screen: Networking },
    FactionSelect: { screen: FactionSelect },
    Home: { screen: Home },
    Tech: { screen: Tech },
    Objectives: { screen: Objectives },
    AvailableObjectives: { screen: AvailableObjectives },
    Attack: { screen: Attack },
    // Defend: { screen: Defend },
    // Actions: { screen: Actions },
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

module.exports = Navigator;