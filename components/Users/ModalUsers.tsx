import useTheme from "@/hooks/useTheme";
import React from "react";
import { Alert, Modal, Text, TextInput, View } from "react-native";
import CustomButton from "../CustomButton";
import getUsersStyles from "./users.styles";

interface Props {
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  age: string;
  setAge: (v: string) => void;
  onSubmit: () => void;
  onCancel?: () => void;
  editing?: boolean;
}

const ModalUsers = ({ name, setName, email, setEmail, age, setAge, onSubmit, onCancel, editing, ...rest }: Props & { modalVisible?: boolean; setModalVisible?: (v: boolean) => void }) => {
  const { colors } = useTheme();
  const styles = getUsersStyles(colors);

  const modalVisible = (rest as any).modalVisible as boolean | undefined;
  const setModalVisible = (rest as any).setModalVisible as ((v: boolean) => void) | undefined;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible && setModalVisible(false);
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ backgroundColor: colors.surface, borderRadius: 10, padding: 16, width: '90%' }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: colors.primary, marginBottom: 12, textAlign: 'center' }}>{editing ? 'Редагувати користувача' : 'Додати користувача'}</Text>
          <TextInput
            style={{ backgroundColor: colors.surface, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, marginBottom: 12, borderWidth: 1, borderColor: colors.border, color: colors.text, width: '100%' }}
            value={name}
            placeholder="Ім'я"
            placeholderTextColor={colors.textMuted}
            onChangeText={setName}
          />
          <TextInput
            style={{ backgroundColor: colors.surface, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, marginBottom: 12, borderWidth: 1, borderColor: colors.border, color: colors.text, width: '100%' }}
            value={email}
            placeholder="Email"
            placeholderTextColor={colors.textMuted}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={{ backgroundColor: colors.surface, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, marginBottom: 12, borderWidth: 1, borderColor: colors.border, color: colors.text, width: '100%' }}
            value={age}
            placeholder="Вік"
            placeholderTextColor={colors.textMuted}
            onChangeText={setAge}
            keyboardType="numeric"
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 8 }}>
              <CustomButton title={editing ? 'Зберегти' : 'Додати'} onPress={() => { onSubmit(); setModalVisible && setModalVisible(false); }} variant="primary" />
            </View>
            <CustomButton title="Відміна" onPress={() => { setModalVisible && setModalVisible(false); onCancel && onCancel(); }} variant="secondary" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalUsers;
