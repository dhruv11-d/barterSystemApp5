import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Drawer from '../screens/Drawer';
import appTab from '../screens/appTab';
import settings from '../screens/Settings';

const navi = createDrawerNavigator({
        Home:{
            screen:appTab
        },
        Settings:{
            screen:settings
        }
    },
        {
            centerComponent:Drawer
        },
        {
            initialRouteName:'Home'
})

export default navi;