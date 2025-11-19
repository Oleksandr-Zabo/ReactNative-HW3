import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../CustomButton";

interface Props {
  id: number;
  name: string;
  email: string;
  age: number;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const ItemUser = ({ id, name, email, age, onEdit, onDelete }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.age}>Вік: {age}</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.actionButtonSpacing}>
          <CustomButton title="Редагувати" onPress={() => onEdit(id)} variant="secondary" />
        </View>
        <CustomButton title="Видалити" onPress={() => onDelete(id)} variant="danger" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eef6fb",
    marginBottom: 10,
  },
  col: {
    flex: 1,
    paddingRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1b262c",
  },
  email: {
    color: "#4b5b6a",
    marginTop: 4,
  },
  age: {
    color: "#6b7a86",
    marginTop: 2,
  },
  actions: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  actionButtonSpacing: {
    marginBottom: 6,
  },
});

export default ItemUser;
