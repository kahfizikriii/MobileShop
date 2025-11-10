import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type SettingsScreenNavigationProp = DrawerNavigationProp<any, 'Settings'>;

interface SettingsScreenProps {
  navigation: SettingsScreenNavigationProp;
  toggleLock: () => void;
}

export default function SettingsScreen({ navigation, toggleLock }: SettingsScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Button title="Toggle Drawer Lock" onPress={toggleLock} />
      <Button
        title="Kembali ke Home"
        onPress={() => navigation.navigate('HomeTabs')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
