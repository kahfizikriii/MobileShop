import React, { useState } from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import ProductCard from "../components/ProductCard";
import AddProductModal from "../components/AddProductModal";
import { Product } from "../types/Product";

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Kaos Polos Hitam",
      price: 75000,
      imageUrl: "https://picsum.photos/id/237/200/200",
      description: "Kaos hitam bahan katun premium.",
    },
    {
      id: "2",
      name: "Sepatu Sneakers",
      price: 250000,
      imageUrl: "https://picsum.photos/id/238/200/200",
      description: "Sneakers keren untuk aktivitas harian.",
    },
    {
      id: "3",
      name: "Jam Tangan Sport",
      price: 180000,
      imageUrl: "https://picsum.photos/id/239/200/200",
      description: "Jam tangan dengan desain sporty modern.",
    },
    {
      id: "4",
      name: "Tas Selempang",
      price: 120000,
      imageUrl: "https://picsum.photos/id/240/200/200",
      description: "Tas keren untuk kerja dan santai.",
    },
    {
      id: "5",
      name: "Topi Baseball",
      price: 85000,
      imageUrl: "https://picsum.photos/id/241/200/200",
      description: "Topi bergaya kasual untuk pria dan wanita.",
    },
    {
      id: "6",
      name: "Jaket Hoodie",
      price: 195000,
      imageUrl: "https://picsum.photos/id/242/200/200",
      description: "Hoodie lembut dengan bahan fleece hangat.",
    },
    {
      id: "7",
      name: "Kacamata Fashion",
      price: 99000,
      imageUrl: "https://picsum.photos/id/243/200/200",
      description: "Kacamata gaya modern untuk semua acara.",
    },
    {
      id: "8",
      name: "Celana Jeans Pria",
      price: 210000,
      imageUrl: "https://picsum.photos/id/244/200/200",
      description: "Jeans slim fit yang nyaman dipakai seharian.",
    },
    {
      id: "9",
      name: "Dompet Kulit",
      price: 130000,
      imageUrl: "https://picsum.photos/id/245/200/200",
      description: "Dompet kulit elegan dengan banyak slot kartu.",
    },
    {
      id: "10",
      name: "Headphone Bluetooth",
      price: 320000,
      imageUrl: "https://picsum.photos/id/246/200/200",
      description: "Headphone nirkabel dengan suara bass kuat.",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  return (
    <View style={styles.container}>
      <Button title="Tambah Produk" onPress={() => setModalVisible(true)} />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        showsVerticalScrollIndicator={false}
      />

      <AddProductModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={handleAddProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 50,
  },
});

export default HomeScreen;
