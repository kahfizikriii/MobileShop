import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { products } from '../../data/products';

export default function PopulerTab() {
  return (
    <FlatList
      data={products.slice(0, 4)}
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  image: { width: '100%', height: 150, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: '600', marginTop: 8 },
  price: { color: '#007AFF', fontWeight: 'bold' },
});
