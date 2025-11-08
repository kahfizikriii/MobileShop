import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const menuItems = [
  { icon: 'settings-outline', text: 'Pengaturan Akun', action: () => Alert.alert('Navigasi', 'Ke halaman Pengaturan Akun') },
  { icon: 'receipt-outline', text: 'Riwayat Pesanan', action: () => Alert.alert('Navigasi', 'Ke halaman Riwayat Pesanan') },
  { icon: 'notifications-outline', text: 'Notifikasi', action: () => Alert.alert('Navigasi', 'Ke halaman Notifikasi') },
  { icon: 'help-buoy-outline', text: 'Pusat Bantuan', action: () => Alert.alert('Navigasi', 'Ke halaman Pusat Bantuan') },
  { icon: 'log-out-outline', text: 'Keluar', action: () => Alert.alert('Logout', 'Anda telah keluar'), color: '#EF4444' },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyZ8tSil2ubBamWdavKSizZw6Nrxia3RFeQ&s' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Muhammad Al Kahfi Zikri</Text>
          <Text style={styles.email}>kahfizikri@gmail.com</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem} onPress={item.action}>
              <Ionicons name={item.icon} size={22} color={item.color || '#4A5568'} />
              <Text style={[styles.menuText, { color: item.color || '#1A202C' }]}>{item.text}</Text>
              <Ionicons name="chevron-forward-outline" size={22} color="#A0AEC0" />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.versionText}>App Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F8' },
  profileHeader: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginBottom: 20,
  },
  name: { fontSize: 24, fontWeight: "bold", color: '#1A202C', marginBottom: 4 },
  email: { fontSize: 16, color: '#4A5568' },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F8',
  },
  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  versionText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#A0AEC0',
    fontSize: 12,
  }
});
