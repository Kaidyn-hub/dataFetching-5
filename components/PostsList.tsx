import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { DataContext } from "../context/DataContext";
import { Post, User } from "../types/types";

export default function PostsList() {
  const { posts, users } = useContext(DataContext);

  const renderPost = ({ item, index }: { item: Post; index: number }) => (
    <View style={styles.card}>
      <Text style={styles.title}>
        {index + 1}. {item.title}
      </Text>
      <Text>{item.body}</Text>
    </View>
  );

  const renderUser = ({ item, index }: { item: User; index: number }) => (
    <View style={styles.card}>
      <Text style={styles.title}>
        {index + 1}. {item.name}
      </Text>
      <Text>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts (Fetch API)</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPost}
      />

      <Text style={styles.header}>Users (Axios)</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUser}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { fontSize: 18, fontWeight: "bold", marginTop: 20, color: 'red' },
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
  },
  title: { 
    fontWeight: "bold"
},
});
