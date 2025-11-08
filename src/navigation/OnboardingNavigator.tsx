import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import Onboarding1 from "../screens/Onboarding1";
import Onboarding2 from "../screens/Onboarding2";
import MainTabNavigator, { MainTabParamList } from "./MainTabs";

export type OnboardingStackParamList = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  MainTabs: NavigatorScreenParams<MainTabParamList>;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
