// src/screens/Onboarding2.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding2'>;

const Onboarding2: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🎉</Text>
        <Text style={styles.title}>Siap untuk Berbelanja?</Text>
        <Text style={styles.subtitle}>Temukan ribuan produk terbaik dengan penawaran menarik.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('MainTabs')}>
        <Text style={styles.buttonText}>Mulai Belanja</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F8', padding: 20 },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: { fontSize: 80, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1A202C', textAlign: 'center', marginBottom: 15 },
  subtitle: { fontSize: 16, color: '#4A5568', textAlign: 'center', maxWidth: '85%' },
  button: { backgroundColor: '#007AFF', paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});
