import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";
import { Product } from "../types/Product";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onClose: () => void;
  onSubmit: (product: Product) => void;
}

const AddProductModal = ({ onClose, onSubmit }: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!name || !price || !image) {
      Alert.alert("Error", "Nama, Harga, dan URL Gambar wajib diisi!");
      return;
    }
    if (!/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(image)) {
      Alert.alert("Error", "URL gambar tidak valid!");
      return;
    }

    const newProduct: Product = {
      id: uuidv4(),
      name,
      price: parseFloat(price),
      image,
      description,
    };

    onSubmit(newProduct);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tambah Produk Baru</Text>

      <TextInput style={styles.input} placeholder="Nama Produk" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Harga" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="URL Gambar (https://...jpg/png)" value={image} onChangeText={setImage} />
      <TextInput style={styles.input} placeholder="Deskripsi (opsional)" value={description} onChangeText={setDescription} />

      <View style={styles.btnContainer}>
        <Button title="Batal" color="gray" onPress={onClose} />
        <Button title="Simpan" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: "#fff", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 15 },
  btnContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
});

export default AddProductModal;
