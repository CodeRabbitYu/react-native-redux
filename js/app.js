/**
 * Created by Rabbit on 2017/7/1.
 */
import {
    StackNavigator,
} from 'react-navigation';

import Home from './pages/Home';
import Detail from './pages/Detail';

const MyApp = StackNavigator({
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

export default MyApp;