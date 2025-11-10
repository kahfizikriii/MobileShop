import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingStack from './src/navigation/OnboardingStack';
import DrawerContent from './src/components/DrawerContent';

export default function App() {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
    
  );
}
