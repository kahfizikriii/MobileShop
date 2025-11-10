import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type OnboardingScreen1NavigationProp = NativeStackNavigationProp<any, 'Onboarding2'>;
export default function OnboardingScreen1({ navigation }: { navigation: OnboardingScreen1NavigationProp }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://picsum.photos/400/300?onb1' }} style={styles.image} />
      <Text style={styles.title}>Selamat Datang di Mini E-Commerce</Text>
      <Text style={styles.desc}>Temukan produk terbaik dengan mudah!</Text>
      <Button title="Next" onPress={() => navigation.navigate('Onboarding2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: '100%', height: 250, borderRadius: 15, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  desc: { fontSize: 16, color: '#666', textAlign: 'center', marginVertical: 10 },
});
