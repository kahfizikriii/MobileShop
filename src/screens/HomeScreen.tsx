import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import { Product } from "../types/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: uuidv4(), name: "Laptop Pro 15", price: 15000000, image: "https://via.placeholder.com/150", description: "Laptop performa tinggi." },
    { id: uuidv4(), name: "Smartphone X", price: 9000000, image: "https://via.placeholder.com/150", description: "HP flagship masa kini." },
    { id: uuidv4(), name: "Headset Bass+", price: 500000, image: "https://via.placeholder.com/150" },
    { id: uuidv4(), name: "Keyboard RGB", price: 800000, image: "https://via.placeholder.com/150" },
    { id: uuidv4(), name: "Gaming Mouse", price: 600000, image: "https://via.placeholder.com/150" },
    { id: uuidv4(), name: "Smartwatch Z", price: 2000000, image: "https://via.placeholder.com/150" },
    { id: uuidv4(), name: "Bluetooth Speaker", price: 1200000, image: "https://via.placeholder.com/150" },
    { id: uuidv4(), name: "Drone Air 2", price: 7500000, image: "https://via.placeholder.com/150" },
    { id: uuidv4(), name: "Tablet Go", price: 4000000, image: "https://via.placeholder.com/150" },
    { id: uuidv4(), name: "Camera X100", price: 8500000, image: "https://via.placeholder.com/150" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const addProduct = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
    setModalVisible(false);
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Rp {item.price.toLocaleString()}</Text>
      {item.description && <Text style={styles.desc}>{item.description}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Product Catalog</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addText}>＋ Tambah Produk</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginVertical: 10 },
  card: { flex: 1, backgroundColor: "#f8f8f8", margin: 5, padding: 10, borderRadius: 10, alignItems: "center" },
  image: { width: 100, height: 100, borderRadius: 10 },
  name: { fontSize: 14, fontWeight: "bold", marginTop: 8 },
  price: { color: "#007AFF", marginTop: 4 },
  desc: { fontSize: 12, textAlign: "center", color: "#555" },
  addButton: { backgroundColor: "#007AFF", padding: 15, borderRadius: 10, position: "absolute", bottom: 20, alignSelf: "center" },
  addText: { color: "white", fontWeight: "bold" },
});

export default HomeScreen;
