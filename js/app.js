/**
 * Created by Rabbit on 2017/7/1.
 */
import {
    StackNavigator,
    addNavigationHelpers
} from 'react-navigation';

import React, { Component } from 'react';


import Home from './pages/Home';
import Detail from './pages/Detail';

import { connect } from 'react-redux';


export const MyApp = StackNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            headerTitle:'首页'
        }
    },
    Detail:{
        screen:Detail,
        navigationOptions:{
            headerTitle:'详情页'
        }
    }
},{
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <MyApp navigation={addNavigationHelpers({ dispatch, state: nav })}/>
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);