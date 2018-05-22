'use strict';
import React, { Component } from 'react';
import ReactNative, {
    AsyncStorage
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

import Networking from '../views/networking';
import Home from '../views/home';

const Navigator = StackNavigator({
    Networking: { screen: Networking },
    Home: { screen: Home },
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

module.exports = Navigator;