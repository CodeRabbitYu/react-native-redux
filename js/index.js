/**
 * Created by Rabbit on 2017/7/1.
 */
import { AppRegistry,View,Text ,} from 'react-native';

import React, { Component } from 'react';

import {Provider}from 'react-redux';

import configureStore from './store/configureStore';
const store = configureStore();

import App from './app';


export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>

        );
    }
};


console.ignoredYellowBox = ['Warning: BackAndroid is deprecated.  Please use BackHandler instead.',
    'source.uri should not be an empty string'
];
// global.BASEURL = 'hahaha';
// 关闭全部的警告
//console.disableYellowBox = true;
// 关闭指定的警告
//console.warn('YellowBox is disabled.');
AppRegistry.registerComponent('reduxDemo', () => Root);