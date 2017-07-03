/**
 * Created by Rabbit on 2017/7/1.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { connect } from 'react-redux';

import { getUserToken } from '../actions/UserToken';

class Detail extends Component {

    // componentDidMount(){
    //     this.props.
    // }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.welcome} onPress={()=>{
                    this.props.getUserToken('hahaha');
                }}>
                    点我修改userToken！
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default connect((state) => {
    const { ShiTuReducer } = state;
    return {
        ShiTuReducer,
    };
},{ getUserToken })(Detail)

