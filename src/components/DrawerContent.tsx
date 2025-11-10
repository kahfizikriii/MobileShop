import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';

export default function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}> 
        <Image source={{ uri: 'https://i.pravatar.cc/150' }} style={styles.avatar} />
        <Text style={styles.name}>Afi Maulana</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity onPress={() => props.navigation.navigate('HomeTabs')}>
          <Text style={styles.item}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <Text style={styles.item}>⚙️ Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => console.log('Logout')}>
          <Text style={styles.logout}>🚪 Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: { alignItems: 'center', marginVertical: 30 },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  name: { fontSize: 18, marginTop: 10, fontWeight: 'bold' },
  menu: { paddingHorizontal: 20 },
  item: { fontSize: 16, marginVertical: 10 },
  footer: { flex: 1, justifyContent: 'flex-end', padding: 20 },
  logout: { color: 'red', fontWeight: 'bold' },
});
