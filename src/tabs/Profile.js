import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import ProfileScreen from '../screens/ProfileScreen';
import FontScreen from '../screens/FontsScreen';
import config from '../config/stack';

const ProfileTab = createStackNavigator(
  {
    Home: {
      screen: FontScreen,
      path: '/',
      navigationOptions: ({ navigation }) => ({
        headerShown:false
      }),
    },
  },
  config
);

export default ProfileTab;
