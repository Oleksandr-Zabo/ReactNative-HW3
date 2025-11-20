import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={
    {
      headerShown: false
    }
  }>
    <Stack.Screen name = "(tabs)"/>
    <Stack.Screen name = "users" options = {{title: "Users"}}/>
    <Stack.Screen name = "notes" options = {{title: "Notes"}}/>
  </Stack>;
}
