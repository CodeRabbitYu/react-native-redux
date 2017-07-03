/**
 * Created by Rabbit on 2017/7/3.
 */

import * as types from '../constant/ActionTypes';
import Config from '../common/Config';

import Request from '../common/Request';


let KEY = 'USERTOKEN';
export function userToken() {
    return dispatch => {
        return dispatch(getHomeInstructions('未修改的数据'));
    }
};


export function getHomeInstructions(instructions) {
    return {
        type: types.HOME_INSTRUCTIONS,
        instructions
    }
}