import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
import MainTabs from './MainTabs';
import SettingsScreen from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const [drawerLocked, setDrawerLocked] = useState(true);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        swipeEnabled: !drawerLocked,
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeTabs" component={MainTabs} />
      <Drawer.Screen
        name="Settings"
        children={(props) => (
          <SettingsScreen {...props} toggleLock={() => setDrawerLocked(!drawerLocked)} />
        )}
      />
    </Drawer.Navigator>
  );
}
