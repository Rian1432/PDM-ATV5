import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />

      <View>
        <Text style={styles.title}>Atividade 5: Telas e navegação</Text>
        <Text style={styles.message}>Bem-vindo a página inicial!</Text>
      </View>

      <Link href="/secondScreen">
        <Button title="Navegar" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  message: {
    fontSize: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 1,
  },
});
