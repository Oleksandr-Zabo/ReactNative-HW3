import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useTheme, { ColorTheme } from "@/hooks/useTheme";

export default function HomeScreen() {
  const router = useRouter();
  const inset = useSafeAreaInsets();
  
  const { colors, toggleDarkMode } = useTheme();
  const styles = createStyles(colors);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: inset.top,
        backgroundColor: colors.bg,
      }}
    >
      <Text style={styles.title}>Головна сторінка</Text>
      <Text style={styles.description}>Опис проекту</Text>
      <Text style={styles.description}>Цей проект демонструє використання Expo Router для навігації між екранами в додатку React Native.</Text>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={toggleDarkMode}
      >
        <Text style={{ color: colors.primary }}>Toggle Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (colors: ColorTheme) => {
  return StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
      color: colors.text,
    },
    description: {
      fontSize: 16,
      textAlign: "center",
      marginHorizontal: 20,
      color: colors.text,
    },
  });
} ;
