import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopTabs from '../navigation/TopTabs';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TopTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
