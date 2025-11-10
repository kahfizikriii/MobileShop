import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type OnboardingScreen2NavigationProp = NativeStackNavigationProp<any, 'MainApp'>;

export default function OnboardingScreen2({ navigation }: { navigation: OnboardingScreen2NavigationProp }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://picsum.photos/400/300?onb2' }} style={styles.image} />
      <Text style={styles.title}>Belanja Cepat dan Aman</Text>
      <Text style={styles.desc}>Akses ribuan produk hanya dengan sentuhan jari.</Text>
      <Button title="Get Started" onPress={() => navigation.replace('MainApp')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: '100%', height: 250, borderRadius: 15, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  desc: { fontSize: 16, color: '#666', textAlign: 'center', marginVertical: 10 },
});
