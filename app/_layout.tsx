import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  // Suppress a known react-native-web deprecation warning about pointerEvents prop
  // createDOMProps warns when `props.pointerEvents` is passed; react-native-web expects
  // style.pointerEvents instead. We ignore that specific warning to avoid noise.
  useEffect(() => {
    if (typeof console !== "undefined") {
      const _warn = console.warn;
      console.warn = (...args: any[]) => {
        try {
          if (typeof args[0] === "string" && args[0].includes("props.pointerEvents is deprecated")) {
            return;
          }
        } catch (e) {
          // ignore
        }
        _warn.apply(console, args as any);
      };
      return () => {
        console.warn = _warn;
      };
    }
  }, []);

  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="users" options={{ title: "Users" }} />
        <Stack.Screen name="notes" options={{ title: "Notes" }} />
      </Stack>
    </ThemeProvider>
  );
}
