import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';
import MainTabs from './MainTabs';

export type RootStackParamList = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding1">
      <Stack.Screen
        name="Onboarding1"
        component={Onboarding1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding2"
        component={Onboarding2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
