import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Oculta o cabeçalho padrão do Expo Router
      }}
    >
      <Stack.Screen
        name="(drawer)"
        options={{
          headerShown: false,
          title: "Prot Laudos",
        }}
      />
      <Stack.Screen
        name="empresas"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
