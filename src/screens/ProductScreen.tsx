import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import productsData from '../data/products';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductScreen = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');

  const addProduct = () => {
    if (!name || !price || !image) {
      Alert.alert('Error', 'Nama, Harga, dan URL Gambar wajib diisi!');
      return;
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      price: parseFloat(price),
      image,
      description: desc || 'Tidak ada deskripsi',
    };

    setProducts([...products, newProduct]);
    setModalVisible(false);
    setName('');
    setPrice('');
    setImage('');
    setDesc('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>Rp {item.price.toLocaleString()}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Tambah Produk</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tambah Produk Baru</Text>
            <TextInput placeholder="Nama Produk" placeholderTextColor="#A0AEC0" style={styles.input} value={name} onChangeText={setName} />
            <TextInput placeholder="Harga" style={styles.input} keyboardType="numeric" value={price} onChangeText={setPrice} />
            <TextInput placeholder="URL Gambar" style={styles.input} value={image} onChangeText={setImage} />
            <TextInput placeholder="Deskripsi (opsional)" style={styles.input} value={desc} onChangeText={setDesc} />

            <TouchableOpacity style={styles.submitButton} onPress={addProduct}>
              <Text style={styles.submitText}>Tambah</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Batal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F8' },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  image: { width: '100%', height: 180, borderRadius: 10, marginBottom: 12 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#1A202C', marginBottom: 4 },
  price: { fontSize: 16, color: '#007AFF', fontWeight: '600', marginBottom: 8 },
  desc: { fontSize: 14, color: '#4A5568', lineHeight: 20 },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007AFF',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  addButtonText: { color: 'white', fontSize: 30, lineHeight: 30 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { 
    backgroundColor: 'white', 
    width: '90%',
    padding: 25, 
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#1A202C' },
  input: { 
    backgroundColor: '#F7F8FA',
    borderWidth: 1, 
    borderColor: '#E2E8F0', 
    borderRadius: 10, 
    padding: 12, 
    marginTop: 10,
    fontSize: 16,
  },
  submitButton: { backgroundColor: '#007AFF', borderRadius: 10, marginTop: 20, padding: 15 },
  submitText: { color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
  cancelButton: {
    marginTop: 10,
    padding: 10,
  },
  cancelText: {
    color: '#EF4444',
    textAlign: 'center',
    fontWeight: '500'
  }
});
