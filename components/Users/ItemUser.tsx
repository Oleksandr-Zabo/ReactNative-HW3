import useTheme from "@/hooks/useTheme";
import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../CustomButton";
import getUsersStyles from "./users.styles";

interface Props {
  id: number;
  name: string;
  email: string;
  age: number;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const ItemUser = ({ id, name, email, age, onEdit, onDelete }: Props) => {
  const { colors } = useTheme();
  const styles = getUsersStyles(colors);

  return (
    <View style={styles.itemContainer}>
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.emailText}>{email}</Text>
        <Text style={{ color: colors.textMuted, marginTop: 2 }}>Вік: {age}</Text>
      </View>
      <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
        <View style={{ marginBottom: 6 }}>
          <CustomButton title="Редагувати" onPress={() => onEdit(id)} variant="secondary" />
        </View>
        <CustomButton title="Видалити" onPress={() => onDelete(id)} variant="danger" />
      </View>
    </View>
  );
};

export default ItemUser;
