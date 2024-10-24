import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Stack, router, Link } from "expo-router";

export default function secondScreen() {
  const firstItem = Math.trunc(Math.random() * 10);
  const secondItem = Math.trunc(Math.random() * 10);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `Visualizar itens`,
          headerBackButtonMenuEnabled: true,
        }}
      />

      <View style={styles.itemList}>
        <Link style={styles.link} href="/">
          Home
        </Link>

        <Text style={styles.listTitle}>Items:</Text>

        <View style={styles.item}>
          <Text style={styles.itemTitle}>Item {firstItem}:</Text>

          <Button
            onPress={() =>
              router.push({
                pathname: "/[id]",
                params: {
                  id: firstItem,
                },
              })
            }
            title="item 1"
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.itemTitle}>Item {secondItem}:</Text>

          <Button
            onPress={() =>
              router.push({
                pathname: "/[id]",
                params: {
                  id: secondItem,
                },
              })
            }
            title="item 2"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  link: {
    color: "#2196f3",
    marginBottom: 10,
  },
  itemList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  listTitle: {
    fontSize: 20,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 12,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#b4b4b4",
    width: 280,
  },
  itemTitle: {
    fontSize: 16,
  },
});
