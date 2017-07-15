/**
 * Created by Rabbit on 2017/7/15.
 */
import { MyApp } from '../app';


export default function StackReducer(state , action) {
    let nextState;
    switch (action.type) {
        default:
            nextState = MyApp.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}