import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PopulerTab from '../screens/tabs/PopulerTab';
import TerbaruTab from '../screens/tabs/TerbaruTab';
import ElektronikTab from '../screens/tabs/ElektronikTab';
import PakaianTab from '../screens/tabs/PakaianTab';
import MakananTab from '../screens/tabs/MakananTab';
import OtomotifTab from '../screens/tabs/Otomotif';
import HiburanTab from '../screens/tabs/HiburanTab';
import BayiTab from '../screens/tabs/BayiTab';

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: { backgroundColor: '#007AFF', height: 3 },
        tabBarLabelStyle: { textTransform: 'capitalize', fontWeight: 'bold' },
        lazy: true,
        lazyPreloadDistance: 1,
      }}
    >
      <Tab.Screen name="Populer" component={PopulerTab} />
      <Tab.Screen name="Terbaru" component={TerbaruTab} />
      <Tab.Screen name="Elektronik" component={ElektronikTab} />
      <Tab.Screen name="Pakaian" component={PakaianTab} />
      <Tab.Screen name="Makanan" component={MakananTab} />
      <Tab.Screen name="Otomotif" component={OtomotifTab} />
      <Tab.Screen name="Hiburan" component={HiburanTab} />
      <Tab.Screen name="Bayi" component={BayiTab} />
    </Tab.Navigator>
  );
}
