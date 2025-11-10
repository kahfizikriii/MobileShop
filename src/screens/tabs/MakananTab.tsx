import React from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';
import { products } from '../../data/products';

export default function MakananTab() {
  const dummyFoods = [
    { id: 101, name: 'Nasi Goreng Spesial', price: 'Rp 25.000', image: 'https://picsum.photos/200/200?food1' },
    { id: 102, name: 'Mie Ayam Jumbo', price: 'Rp 20.000', image: 'https://picsum.photos/200/200?food2' },
  ];

  return (
    <FlatList
      data={dummyFoods}
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
