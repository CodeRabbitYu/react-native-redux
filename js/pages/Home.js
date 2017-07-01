/**
 * Created by Rabbit on 2017/7/1.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';

import { userToken } from '../actions/UserToken';


class Home extends Component {
    componentDidMount() {
        console.log('componentDidMount');
        this.props.userToken();
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');

        // 每次值更新的时候，都会走这个方法，所以可以在这个方法里面添加判断，用来更新页面
        const { userToken } = this.props.ShiTuReducer;
        console.log(userToken);


    }

    render() {
        const { userToken } = this.props.ShiTuReducer;
        console.log(userToken);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!  ！！
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js!!
                </Text>
                <Text style={styles.instructions}>
                    { userToken }
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
},{ userToken})(Home)
