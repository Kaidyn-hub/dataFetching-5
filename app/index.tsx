import ProductList from "@/components/ProductList";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});
