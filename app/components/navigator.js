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

const Navigator = StackNavigator({
    Networking: { screen: Networking },
    FactionSelect: { screen: FactionSelect },
    Home: { screen: Home },
    Tech: { screen: Tech },
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

module.exports = Navigator;