import useTheme from "@/hooks/useTheme";
import React from "react";
import { FlatList, Text, View } from "react-native";
import ItemUser from "./ItemUser";
import getUsersStyles from "./users.styles";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export const UserList = ({ users, onEdit, onDelete }: Props) => {
  const { colors } = useTheme();
  const styles = getUsersStyles(colors);

  if (!users || users.length === 0) {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ color: colors.textMuted, textAlign: 'center' }}>Поки що немає користувачів.</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(u) => u.id.toString()}
        renderItem={({ item }) => (
          <ItemUser
            id={item.id}
            name={item.name}
            email={item.email}
            age={item.age}
            onEdit={() => onEdit(item)}
            onDelete={onDelete}
          />
        )}
      />
    </View>
  );
};

export default UserList;
