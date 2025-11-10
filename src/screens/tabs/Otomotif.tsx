import React from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';
import { products } from '../../data/products';

export default function OtomotifTab() {
  const dummyCars = [
    { id: 201, name: 'Mobil RC Drift', price: 'Rp 450.000', image: 'https://picsum.photos/200/200?car1' },
    { id: 202, name: 'Helm Full Face', price: 'Rp 350.000', image: 'https://picsum.photos/200/200?car2' },
  ];

  return (
    <FlatList
      data={dummyCars}
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
