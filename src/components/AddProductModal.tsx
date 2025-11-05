import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { Product } from "../types/Product";

// Generator ID sederhana tanpa library
const uuidv4 = () => Math.random().toString(36).substring(2, 9);

interface Props {
  visible: boolean;
  onClose: () => void;
  onAdd: (product: Product) => void;
}

const AddProductModal: React.FC<Props> = ({ visible, onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  // Validasi URL sederhana
  const isValidUrl = (url: string) => {
    const pattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
    return pattern.test(url);
  };

  const handleSubmit = () => {
    if (!name || !price || !imageUrl) {
      Alert.alert("Error", "Nama, harga, dan URL gambar wajib diisi!");
      return;
    }

    if (isNaN(Number(price))) {
      Alert.alert("Error", "Harga harus berupa angka!");
      return;
    }

    if (!isValidUrl(imageUrl)) {
      Alert.alert("Error", "Masukkan URL gambar yang valid!");
      return;
    }

    const newProduct: Product = {
      id: uuidv4(),
      name,
      price: Number(price),
      imageUrl,
      description,
    };

    onAdd(newProduct);
    onClose();

    // Reset form
    setName("");
    setPrice("");
    setImageUrl("");
    setDescription("");
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Tambah Produk</Text>

          <TextInput
            placeholder="Nama Produk"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Harga"
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="URL Gambar"
            style={styles.input}
            value={imageUrl}
            onChangeText={setImageUrl}
          />
          <TextInput
            placeholder="Deskripsi (opsional)"
            style={[styles.input, { height: 80 }]}
            multiline
            value={description}
            onChangeText={setDescription}
          />

          <View style={styles.buttons}>
            <Button title="Batal" onPress={onClose} color="#888" />
            <Button title="Simpan" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "85%",
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default AddProductModal;
