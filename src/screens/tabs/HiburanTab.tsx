import React from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';

export default function HiburanTab() {
  const entertainment = [
    { id: 301, name: 'Headset Gaming RGB', price: 'Rp 400.000', image: 'https://picsum.photos/200/200?ent1' },
    { id: 302, name: 'Konsol Game Mini', price: 'Rp 1.200.000', image: 'https://picsum.photos/200/200?ent2' },
  ];

  return (
    <FlatList
      data={entertainment}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      )}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 10, marginBottom: 10, elevation: 3 },
  image: { width: '100%', height: 150, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: '600', marginTop: 8 },
  price: { color: '#007AFF', fontWeight: 'bold' },
});
