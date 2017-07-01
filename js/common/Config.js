/**
 * Created by Rabbit on 2017/7/1.
 */

'use strict';

const base = {
    // baseURL : iOS?'http://localhost:3000/api':'http://172.16.17.11:3000/api',

    // baseURL:iOS?'http://localhost:1234/api':'http://10.0.2.2:1234/api',

    // baseURL:!iOS?'http://localhost:1234/api':'http://172.16.17.61:1234/api',
    baseURL :'http://shitu.leanapp.cn/api'
};

const Config = {
    api:{
        userToken: base.baseURL + '/userToken',
    },

};

module.exports = Config;