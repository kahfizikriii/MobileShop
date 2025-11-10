import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/200' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Muhammad Al Kahfi Zikri</Text>
      <Text style={styles.email}>afi@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: 'bold' },
  email: { fontSize: 16, color: '#666' },
});
