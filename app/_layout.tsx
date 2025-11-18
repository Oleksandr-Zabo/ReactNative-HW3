import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={
    {
      headerStyle: {
       backgroundColor: "orange",
      },
      headerTintColor: "white",
      headerTitleStyle:{
        fontSize: 25,
        fontWeight: "bold"
      },
      contentStyle:{
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: "azure"
      }
    }
  }>
    <Stack.Screen name = "index" options = {{title: "Home"}}/>
    <Stack.Screen name = "users" options = {{title: "Users"}}/>
    <Stack.Screen name = "notes" options = {{title: "Notes"}}/>
  </Stack>;
}
