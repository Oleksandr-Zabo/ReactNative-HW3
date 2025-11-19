import React from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../CustomButton";

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

export const ModalUsers = ({ name, setName, email, setEmail, age, setAge, onSubmit, onCancel, editing, ...rest }: Props & { modalVisible?: boolean; setModalVisible?: (v: boolean) => void }) => {
  // the actual modal visibility is controlled by parent via `modalVisible`/`setModalVisible` props
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
      }}>
      <View style={modalStyles.modalOverlay}>
        <View style={modalStyles.modalContent}>
          <Text style={styles.title}>{editing ? 'Редагувати користувача' : 'Додати користувача'}:</Text>
          <TextInput style={styles.input} value={name} placeholder="Ім'я" onChangeText={setName} />
          <TextInput style={styles.input} value={email} placeholder="Email" onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
          <TextInput style={styles.input} value={age} placeholder="Вік" onChangeText={setAge} keyboardType="numeric" />
          <View style={styles.buttonsRow}>
            <View style={styles.buttonLeft}>
              <CustomButton title={editing ? 'Зберегти' : 'Додати'} onPress={() => { onSubmit(); setModalVisible && setModalVisible(false); }} variant="primary" />
            </View>
            <CustomButton title="Відміна" onPress={() => { setModalVisible && setModalVisible(false); onCancel && onCancel(); }} variant="secondary" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  form: { marginBottom: 8 },
  title: { fontSize: 20, fontWeight: '700', color: '#05668d', marginBottom: 8, textAlign: 'center' },
  input: { backgroundColor: '#fff', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, marginBottom: 8, borderWidth: 1, borderColor: '#e6eef5' },
  buttonsRow: { flexDirection: 'row', alignItems: 'center' },
  buttonLeft: { marginRight: 8 },
});

export default ModalUsers;

const modalStyles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
