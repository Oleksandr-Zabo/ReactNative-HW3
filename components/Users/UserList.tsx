import React from "react";
import { FlatList, View } from "react-native";
import ItemUser from "./ItemUser";

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
