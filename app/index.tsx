import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.title}>Головна сторінка</Text>
      <TouchableOpacity style={styles.button} onPress={()=> router.push("notes" as any)}>
        <Text style={styles.textButton}>Перейти на наші нотатки</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> router.push("users" as any)}>
        <Text style={styles.textButton}>Перейти на наших користувачів</Text>
      </TouchableOpacity>
    </View>
  );
}

  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
      
    },
    button: {
      paddingBlock: 12,
      paddingHorizontal: 16,
      backgroundColor: "blue",
      borderRadius: 10,
      marginBottom: 10,
    },
    textButton: {
      color: "white"
    }

    
  });