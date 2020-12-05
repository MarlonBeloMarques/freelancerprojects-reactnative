import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Platform } from 'react-native';

import { theme } from '../constants';
import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: null,
        headerTintColor: theme.colors.white,
        title: null,
        headerLeftContainerStyle: {
          alignItems: 'center',
          marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
          padding: theme.sizes.base,
        },
        headerRightContainerStyle: {
          alignItems: 'center',
          marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
          padding: theme.sizes.base,
        },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SigninScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
