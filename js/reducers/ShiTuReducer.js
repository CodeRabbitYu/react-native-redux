/**
 * Created by Rabbit on 2017/5/23.
 */
import * as types from '../constant/ActionTypes';


const initialState = {
    imageURL: '',
    userToken: '',
};
export default function ShiTuReducer(state = initialState, action){
    console.log(action);
    switch (action.type) {
        case types.USER_TOKEN_SUCCESS:
            // console.log(action);
            return Object.assign({}, state, {
                // ...state,
                userToken: action.userToken,
            });
        default:
            return state;
    }
}

// const rootReducer = combineReducers({
//     ShiTuReducer
// })


