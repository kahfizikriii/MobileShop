import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Definisikan nama rute dan parameternya
export type MainTabParamList = {
  Products: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = 'alert-circle';

          switch (route.name) {
            case 'Products':
              iconName = 'list';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            default:
              iconName = 'alert-circle-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          paddingTop: 5,
          paddingBottom: 5,
          height: 60,
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.05,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: -5 },
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
        headerStyle: { backgroundColor: '#F0F4F8', elevation: 0, shadowOpacity: 0 },
        headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen
        name="Products"
        component={ProductScreen}
        options={{ title: 'Catalog' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;