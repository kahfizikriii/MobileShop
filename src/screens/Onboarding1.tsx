import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../navigation/OnboardingNavigator";

type Props = { navigation: NativeStackNavigationProp<OnboardingStackParamList, "Onboarding1"> };

export default function Onboarding1({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🛍️</Text>
        <Text style={styles.title}>Selamat Datang di Mini E-Commerce</Text>
        <Text style={styles.subtitle}>Belanja mudah dan cepat langsung dari ponselmu.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Onboarding2")}>
        <Text style={styles.buttonText}>Lanjut ➡️</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F8', padding: 20 },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 15, textAlign: "center", color: '#1A202C' },
  subtitle: { fontSize: 16, color: '#4A5568', textAlign: 'center', maxWidth: '80%' },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});
